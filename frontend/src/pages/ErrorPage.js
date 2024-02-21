const ErrorPage = {
  id: "error",
  title: "English Galaxy | 404",
  render: () => {
    return `
      <section class="error-page">
        <div class="error-page__container container">
          <div class="error-page__body">
            <img class="error-page__image-404" src="img/404/404.svg" />
            <a href="#main" class="error-page__btn">На главную</a>
          </div>
          <div class="error-page__objects">
            <img class="error-page__object-rocket" src="img/404/rocket.svg" />
            <div class="error-page__earth-moon">
              <img class="error-page__object-earth" src="img/404/earth.svg" />
              <img class="error-page__object-moon" src="img/404/moon.svg" />
            </div>
            <div class="error-page__objects__box-astronaut">
              <img class="error-page__object-astronaut" src="img/404/astronaut.svg" />
            </div>
          </div>
          <div class="error-page__glowing-stars">
            <div class="error-page__star"></div>
            <div class="error-page__star"></div>
            <div class="error-page__star"></div>
            <div class="error-page__star"></div>
            <div class="error-page__star"></div>
          </div>
        </div>
      </section>
    `;
  }
};

export default ErrorPage;
