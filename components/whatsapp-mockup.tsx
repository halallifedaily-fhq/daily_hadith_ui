export function WhatsAppMockup() {
  return (
    <div className="relative w-full max-w-[320px]">
      {/* Phone frame */}
      <div className="bg-foreground/10 rounded-[2.5rem] p-3 shadow-2xl">
        <div className="bg-[#111b21] rounded-[2rem] overflow-hidden">
          {/* Status bar */}
          <div className="h-6 bg-[#1f2c34] flex items-center justify-between px-4">
            <span className="text-white/60 text-xs">9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-2 bg-white/60 rounded-sm" />
            </div>
          </div>

          {/* WhatsApp header */}
          <div className="bg-[#1f2c34] px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#25d366] rounded-full flex items-center justify-center">
              <span className="text-white text-lg">📿</span>
            </div>
            <div>
              <p className="text-white font-medium text-sm">Daily Hadith</p>
              <p className="text-white/50 text-xs">online</p>
            </div>
          </div>

          {/* Chat area */}
          <div
            className="bg-[#0b141a] min-h-[350px] p-4 space-y-3"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          >
            {/* Message bubble */}
            <div className="flex justify-start">
              <div className="bg-[#1f2c34] rounded-lg rounded-tl-none p-4 max-w-[250px] shadow-lg">
                <p className="text-white/90 text-sm leading-relaxed mb-3">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
                <p className="text-white/80 text-sm leading-relaxed mb-3">The Prophet ﷺ said:</p>
                <p className="text-white text-sm leading-relaxed mb-3 italic">
                  "The best among you are those who have the best manners and character."
                </p>
                <p className="text-[#25d366] text-xs">— Sahih Bukhari 6029</p>
                <div className="flex justify-end mt-2">
                  <span className="text-white/40 text-xs">7:00 AM</span>
                </div>
              </div>
            </div>

            {/* Date divider */}
            <div className="flex justify-center">
              <span className="bg-[#1f2c34] text-white/50 text-xs px-3 py-1 rounded-full">Today</span>
            </div>

            {/* Second message */}
            <div className="flex justify-start">
              <div className="bg-[#1f2c34] rounded-lg rounded-tl-none p-4 max-w-[250px] shadow-lg">
                <p className="text-white/80 text-sm leading-relaxed mb-2">🌙 Reflection:</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  How can I embody better character today in my interactions with family and colleagues?
                </p>
                <div className="flex justify-end mt-2">
                  <span className="text-white/40 text-xs">7:00 AM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Input area */}
          <div className="bg-[#1f2c34] p-3 flex items-center gap-2">
            <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2">
              <span className="text-white/30 text-sm">Type a message</span>
            </div>
            <div className="w-10 h-10 bg-[#25d366] rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 15c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3z" />
                <path d="M17 12c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-2.08c3.39-.49 6-3.39 6-6.92h-2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-4 bg-[#25d366]/10 rounded-[3rem] blur-2xl -z-10" />
    </div>
  )
}
