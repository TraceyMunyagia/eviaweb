export type QuoteSubmission = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  category: string;
  description: string;
  package: string;
  pages: string;
};

export async function submitQuote(quote: QuoteSubmission) {
  const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

  if (!url || !anonKey) {
    throw new Error("Quote submissions are not configured yet.");
  }

  const response = await fetch(`${url}/rest/v1/rpc/submit_quote`, {
    method: "POST",
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      p_name: quote.name,
      p_business_name: quote.businessName,
      p_email: quote.email,
      p_phone: quote.phone,
      p_category: quote.category,
      p_description: quote.description,
      p_package: quote.package,
      p_pages: quote.pages,
    }),
  });

  if (!response.ok) {
    const body = await response.json().catch(() => null) as { message?: string } | null;
    throw new Error(body?.message || "We couldn't submit your quote. Please try again.");
  }

  return response.json() as Promise<string>;
}
