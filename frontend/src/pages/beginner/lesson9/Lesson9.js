const Lesson9 = {
  id: "lesson9",
  title: "English Galaxy | Урок 9",
  render: (...rest) => {
    return `
      <section class="lesson">
        <div class="container">
          <div class="lesson__container">
            <a href="#main" class="close"></a>
            <h4 class="lesson__title">Урок 9</h4>
            <div class="lesson__cards">
              <div class="lesson__card">
                <div class="lesson__card-content">
                  <h3 class="lesson__card-title">Теория</h3>
                  <p class="lesson__card-description">Ознакомьтесь с важнейшими грамматическими правилами</p>
                </div>
                <div class="lesson__card-link">
                  <a href="#grammar1l9"></a>
                </div>
              </div>
              <div class="lesson__card">
                <div class="lesson__card-content">
                  <h3 class="lesson__card-title">Проверка слов</h3>
                  <p class="lesson__card-description">Расширяйте свой словарный запас</p>
                </div>
                <div class="lesson__card-link">
                  <a href="#words1l9"></a>
                </div>
              </div>
              <div class="lesson__card">
                <div class="lesson__card-content">
                  <h3 class="lesson__card-title">Тест</h3>
                  <p class="lesson__card-description">Заполните пропуск</p>
                </div>
                <div class="lesson__card-link">
                  <a href="#test1l9"></a>
                </div>
              </div>
              <div class="lesson__card">
                <div class="lesson__card-content">
                  <h3 class="lesson__card-title">Мэтчинг</h3>
                  <p class="lesson__card-description">Закрепляйте изученные слова</p>
                </div>
                <div class="lesson__card-link">
                  <a href="#matchingl9"></a>
                </div>
              </div>
            </div>
          </div>
          <footer class="footer">
            <div class="footer__container">
              <nav>
                <ul class="footer__list">
                  <li>
                    <a class="footer__link" href="#main"><img src="img/home.svg" alt="" /><span class="footer__text">Главная</span></a>
                  </li>
                  <li>
                    <a class="footer__link" href="#dictionary"><img src="img/book.svg" alt="" /><span class="footer__text">Словарь</span></a>
                  </li>
                  <li>
                    <a class="footer__link" href="#settings"><img src="img/settings.svg" alt="" /><spanclass="footer__text">Настройки</spanclass=></a>
                  </li>
                  <li>
                    <a class="footer__link" href="#profile"><img src="img/user.svg" alt="" /><span class="footer__text">Профиль</span></a>
                  </li>
                </ul>
              </nav>
            </div>
          </footer>
        </div>
      </section>
    `;
  }
};

export default Lesson9;