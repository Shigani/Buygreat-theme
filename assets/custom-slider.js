if (!customElements.get('slider-component')) {
  customElements.define('slider-component', class SliderComponent extends HTMLElement {
      constructor() {
        super();
        this.slider = this.querySelector('[id^="Slider-"]');
        this.sliderItems = this.querySelectorAll('[id^="Slide-"]');
        this.enableSliderLooping = false;
        this.currentPageElement = this.querySelector('.slider-counter--current');
        this.pageTotalElement = this.querySelector('.slider-counter--total');
        this.prevButton = this.querySelector('button[name="previous"]');
        this.nextButton = this.querySelector('button[name="next"]');
        this.isVertical = false;

        if (!this.slider || !this.nextButton) return;

        this.initPages();
        const resizeObserver = new ResizeObserver(entries => this.initPages());
        resizeObserver.observe(this.slider);

        this.slider.addEventListener('scroll', this.update.bind(this));
        this.prevButton.addEventListener('click', this.onButtonClick.bind(this));
        this.nextButton.addEventListener('click', this.onButtonClick.bind(this));
      }

      initPages() {
        this.isVertical = this.dataset.sliderAxis === 'vertical' && window.matchMedia('(min-width: 750px)').matches;
        this.sliderItemsToShow = Array.from(this.sliderItems).filter(element => element.clientWidth > 0);
        if (this.sliderItemsToShow.length < 2) return;
        this.sliderItemOffset = this.isVertical
          ? this.sliderItemsToShow[1].offsetTop - this.sliderItemsToShow[0].offsetTop
          : this.sliderItemsToShow[1].offsetLeft - this.sliderItemsToShow[0].offsetLeft;
        if (!this.sliderItemOffset) return;
        const sliderSize = this.isVertical ? this.slider.clientHeight : this.slider.clientWidth;
        const firstItemOffset = this.isVertical ? this.sliderItemsToShow[0].offsetTop : this.sliderItemsToShow[0].offsetLeft;
        this.slidesPerPage = Math.floor((sliderSize - firstItemOffset) / this.sliderItemOffset);
        this.totalPages = this.sliderItemsToShow.length - this.slidesPerPage + 1;
        this.update();
      }

      resetPages() {
        this.sliderItems = this.querySelectorAll('[id^="Slide-"]');
        this.initPages();
      }

      update() {
        const previousPage = this.currentPage;
        const scrollPosition = this.isVertical ? this.slider.scrollTop : this.slider.scrollLeft;
        this.currentPage = Math.round(scrollPosition / this.sliderItemOffset) + 1;

        if (this.currentPageElement && this.pageTotalElement) {
          this.currentPageElement.textContent = this.currentPage;
          this.pageTotalElement.textContent = this.totalPages;
        }

        if (this.currentPage != previousPage) {
          this.dispatchEvent(new CustomEvent('slideChanged', { detail: {
            currentPage: this.currentPage,
            currentElement: this.sliderItemsToShow[this.currentPage - 1]
          }}));
        }

        if (this.enableSliderLooping) return;

        if (this.isSlideVisible(this.sliderItemsToShow[0]) && scrollPosition === 0) {
          this.prevButton.setAttribute('disabled', 'disabled');
        } else {
          this.prevButton.removeAttribute('disabled');
        }

        if (this.isSlideVisible(this.sliderItemsToShow[this.sliderItemsToShow.length - 1])) {
          this.nextButton.setAttribute('disabled', 'disabled');
        } else {
          this.nextButton.removeAttribute('disabled');
        }
      }

      isSlideVisible(element, offset = 0) {
        const scrollPosition = this.isVertical ? this.slider.scrollTop : this.slider.scrollLeft;
        const viewportSize = this.isVertical ? this.slider.clientHeight : this.slider.clientWidth;
        const elementStart = this.isVertical ? element.offsetTop : element.offsetLeft;
        const elementSize = this.isVertical ? element.offsetHeight : element.offsetWidth;
        const lastVisibleSlide = viewportSize + scrollPosition - offset;
        return (elementStart + elementSize) <= lastVisibleSlide && elementStart >= scrollPosition;
      }

      onButtonClick(event) {
        event.preventDefault();
        const step = event.currentTarget.dataset.step || 1;
        const currentPosition = this.isVertical ? this.slider.scrollTop : this.slider.scrollLeft;
        this.slideScrollPosition = event.currentTarget.name === 'next' ? currentPosition + (step * this.sliderItemOffset) : currentPosition - (step * this.sliderItemOffset);
        this.slider.scrollTo(this.isVertical ? {
          top: this.slideScrollPosition
        } : {
          left: this.slideScrollPosition
        });
      }

  });
}
