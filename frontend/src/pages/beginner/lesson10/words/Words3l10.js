const Words3l10 = {
  id: "words3l10",
  title: "English Galaxy | Урок 10",
  render: (...rest) => {
    return `
      <section class="words">
        <div class="words__container container">
          <a href="#lesson10" class="close"></a>
          <div class="words__content">
            <h2 class="words__content-title">Выберите правильный перевод</h2>
            <div class="words__content-word">song</div>
            <button class="word-listen"></button>
            <div class="words__content-answers">
              <fieldset class="checkbox-group">
                <div class="checkbox">
                  <label class="checkbox-wrapper">
                    <input type="radio" class="checkbox-input" />
                    <span class="checkbox-tile">
                      <span class="checkbox-label">книга</span>
                    </span>
                  </label>
                </div>
                <div class="checkbox">
                  <label class="checkbox-wrapper">
                    <input type="radio" class="checkbox-input" />
                    <span class="checkbox-tile">
                      <span class="checkbox-label">музыка</span>
                    </span>
                  </label>
                </div>
                <div class="checkbox">
                  <label class="checkbox-wrapper">
                    <input id="checkbox-true" type="radio" class="checkbox-input" />
                    <span class="checkbox-tile">
                      <span class="checkbox-label">песня</span>
                    </span>
                  </label>
                </div>
              </fieldset>
            </div>
          </div>
          <a href="#words4l10" class="task__check task__check-disabled">Проверить</a>
        </div>
      </section>
    `;
  }
};

export default Words3l10;