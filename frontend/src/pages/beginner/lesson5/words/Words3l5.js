const Words3l5 = {
  id: "words3l5",
  title: "English Galaxy | Урок 5",
  render: (...rest) => {
    return `
      <section class="words">
        <div class="words__container container">
          <a href="#lesson5" class="close"></a>
          <div class="words__content">
            <h2 class="words__content-title">Выберите правильный перевод</h2>
            <div class="words__content-word">education</div>
            <button class="word-listen"></button>
            <div class="words__content-answers">
              <fieldset class="checkbox-group">
                <div class="checkbox">
                  <label class="checkbox-wrapper">
                    <input type="radio" class="checkbox-input" />
                    <span class="checkbox-tile">
                      <span class="checkbox-label">школа</span>
                    </span>
                  </label>
                </div>
                <div class="checkbox">
                  <label class="checkbox-wrapper">
                    <input type="radio" class="checkbox-input" />
                    <span class="checkbox-tile">
                      <span class="checkbox-label">бизнес</span>
                    </span>
                  </label>
                </div>
                <div class="checkbox">
                  <label class="checkbox-wrapper">
                    <input id="checkbox-true" type="radio" class="checkbox-input" />
                    <span class="checkbox-tile">
                      <span class="checkbox-label">образование</span>
                    </span>
                  </label>
                </div>
              </fieldset>
            </div>
          </div>
          <a href="#words4l5" class="task__check task__check-disabled">Проверить</a>
        </div>
      </section>
    `;
  }
};

export default Words3l5;