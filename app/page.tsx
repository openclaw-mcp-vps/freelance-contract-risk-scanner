export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Contract Analysis
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Scan Contracts for{' '}
          <span className="text-[#58a6ff]">Payment &amp; Liability</span>{' '}Red Flags
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload any freelance contract and get an instant AI-powered risk report — flagged clauses, IP traps, unfair payment terms, and safer alternatives you can actually use.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
        >
          Start Scanning — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No contracts required (ironic, we know).</p>

        {/* Risk badges */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          {[
            { icon: '⚠️', label: 'Payment Risk', desc: 'Net-90, kill fees, late penalties' },
            { icon: '🔒', label: 'IP Ownership', desc: 'Work-for-hire & rights grabs' },
            { icon: '⚖️', label: 'Liability Traps', desc: 'Unlimited indemnity clauses' },
            { icon: '📋', label: 'Safer Alternatives', desc: 'Rewritten clause suggestions' },
          ].map((item) => (
            <div key={item.label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-sm font-semibold text-white mb-1">{item.label}</div>
              <div className="text-xs text-[#8b949e]">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited contract scans',
              'AI risk scoring (Low / Medium / High)',
              'Flagged clause explanations',
              'Safer alternative language',
              'Downloadable PDF report',
              'Supports PDF, DOCX, TXT',
            ].map((feat) => (
              <li key={feat} className="flex items-start gap-2 text-sm">
                <span className="text-[#3fb950] mt-0.5">✓</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'What file types can I upload?',
              a: 'We support PDF, DOCX, and plain text (.txt) files. Most contracts exported from Google Docs, Word, or DocuSign work perfectly.'
            },
            {
              q: 'Is my contract data kept private?',
              a: 'Your contracts are processed in memory and never stored on our servers. Analysis is performed via encrypted API calls and discarded immediately after your report is generated.'
            },
            {
              q: 'Does this replace a real lawyer?',
              a: 'No — and we\'re upfront about that. Contract Risk Scanner helps you spot obvious red flags fast, but for high-stakes agreements always consult a licensed attorney.'
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Contract Risk Scanner. Not legal advice.
      </footer>
    </main>
  )
}
