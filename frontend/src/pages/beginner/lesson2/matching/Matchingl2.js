const Matchingl2 = {
  id: "matchingl2",
  title: "English Galaxy | Урок 2",
  render: (...rest) => {
    return `
      <section class="matching">
        <div class="matching__container container">
          <a href="#lesson2" class="close"></a>
          <div class="matching__content">
            <h2 class="matching__content-title">Соотнесите слова с верным переводом</h2>
            <div class="matching__content-answers">
              <div class="matching__content-answers-left">
                <ul class="matching__content-list">
                  <li class="matching__content-item">eat</li>
                  <li class="matching__content-item">motivation</li>
                  <li class="matching__content-item">different</li>
                  <li class="matching__content-item">progress</li>
                  <li class="matching__content-item">exercise</li>
                </ul>
              </div>
              <div class="matching__content-answers-right">
                <ul class="matching__list">
                  <li id="matching__item-5" class="matching__item">упражнение</li>
                  <li id="matching__item-1" class="matching__item">есть</li>
                  <li id="matching__item-4" class="matching__item">погресс</li>
                  <li id="matching__item-3" class="matching__item">разные</li>
                  <li id="matching__item-2" class="matching__item">мотивация</li>
                </ul>
              </div>
            </div>
            <a href="#lesson2" class="matching__check matching__check-disabled">Далее</a>
          </div>
        </div>
      </section>
    `;
  }
};

export default Matchingl2;