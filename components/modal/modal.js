import './modal.scss'

export class Modal {
	constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.$el.dataset.type = "modal"
    this.options = options

    this.#render()
    this.#setup()
  }

  #render() {
    const {} = this.options
    this.$el.classList.add('custom-modal')
    this.$el.insertAdjacentHTML('afterBegin', `
      <div class="custom-modal__window" data-type="window">
        <button class="custom-modal__close" data-type="close"></button>
        <div class="custom-modal__header">
          <h2>Title</h2>
        </div>
        <div class="custom-modal__body">
          <p>Body</p>
        </div>
        <div class="custom-modal__footer">
          <button>Ok</button>
          <button data-type="close">Close</button>
        </div>
      </div>
    `)
  }

  #setup() {
    this.clickHandler = this.clickHandler.bind(this)
    document.querySelector('[data-type="opener"]').addEventListener('click', this.clickHandler)
    this.$el.addEventListener('click', this.clickHandler)
  }


  clickHandler(event) {
    const {type} = event.target.dataset
    if(type === 'opener') {
      this.toggle()
    } else if(type === 'close' || type === 'modal') {
      this.toggle()
    }
  }

	toggle() {
    this.$el.classList.toggle('custom-modal_opened')
  }

	destroy() {}
}
