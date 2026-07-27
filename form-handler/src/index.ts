export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === "OPTIONS") {
      return cors(new Response(null, { status: 204 }));
    }

    if (request.method !== "POST") {
      return cors(new Response("Method not allowed", { status: 405 }));
    }

    if (!request.headers.get("Content-Type")?.includes("application/json")) {
      return cors(Response.json({ error: "Expected JSON" }, { status: 415 }));
    }

    let body: Record<string, unknown>;
    try {
      body = await request.json();
    } catch {
      return cors(Response.json({ error: "Invalid JSON" }, { status: 400 }));
    }

    const { name, email, company, message } = body as {
      name?: unknown;
      email?: unknown;
      company?: unknown;
      message?: unknown;
    };

    if (!name || !email || !message) {
      return cors(
        Response.json({ error: "Missing required fields: name, email, message" }, { status: 400 })
      );
    }

    if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
      return cors(
        Response.json({ error: "Fields name, email, message must be strings" }, { status: 400 })
      );
    }

    const toEmail = env.TO_EMAIL;
    const fromEmail = env.FROM_EMAIL ?? "contact@jordanchristley.com";

    if (!toEmail) {
      return cors(
        Response.json({ error: "Recipient not configured" }, { status: 500 })
      );
    }

    try {
      await env.EMAIL.send({
        from: { email: fromEmail, name: "Jordan Christley Site" },
        to: toEmail,
        replyTo: email,
        subject: `Contact form message from ${name}`,
        html: `<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
${company ? `<p><strong>Company:</strong> ${escapeHtml(company as string)}</p>` : ""}
<p><strong>Message:</strong></p>
<p>${escapeHtml(message)}</p>`,
        text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}${company ? `\nCompany: ${company}` : ""}\nMessage: ${message}`,
      });

      return cors(Response.json({ success: true }));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      return cors(Response.json({ error: errorMessage }, { status: 500 }));
    }
  },
};

function cors(response: Response): Response {
  const headers = new Headers(response.headers);
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

interface Env {
  EMAIL: {
    send: (msg: {
      from: { email: string; name?: string };
      to: string | string[];
      replyTo?: string;
      subject: string;
      html?: string;
      text?: string;
    }) => Promise<{ messageId: string }>;
  };
  TO_EMAIL: string | undefined;
  FROM_EMAIL: string | undefined;
}
