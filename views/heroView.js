export function render() {
  return `
    <section id="hero">
      <div class="hero-bg"></div>
      <div class="hero-grid"></div>
      <canvas id="heroCanvas" class="hero-canvas"></canvas>
      <div class="container">
        <div class="hero-terminal-wrap fade-up">
          <div class="terminal-window">
            <div class="terminal-header">
              <div class="terminal-dots">
                <span class="dot dot-red"></span>
                <span class="dot dot-yellow"></span>
                <span class="dot dot-green"></span>
              </div>
              <span class="terminal-title">bash &mdash; karthikeyan@portfolio: ~</span>
              <span class="terminal-header-right">zsh</span>
            </div>
            <div class="terminal-body" id="terminalBody"></div>
          </div>
        </div>
      </div>
      <div class="hero-scroll" aria-hidden="true"></div>
    </section>`;
}
