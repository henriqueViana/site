export default class Modal{

	constructor() {
		this._title = document.querySelector('.title-alert');
		this._content = document.querySelector('.content-alert');
		this._containerButtons = document.querySelector('.container-buttons');
		this._closeButtons = document.querySelectorAll('.close');
		this._clearButton = document.querySelector('.clear-event');

		this._modals = document.querySelectorAll(".alert-modal");

		this.draw();
	}

	draw() {

		for(let i = 0; i < this._modals.length; i++)
		{
			this._modals[i].addEventListener('click', (event) => {
				
				let element = event.target;

				while(element)
				{
					if(element.id === "alert-body") return;
					
					element = element.offsetParent;
				}

				this.close();

			},true);

		}

		for(let i = 0; i < this._closeButtons.length; i++)
		{
			this._closeButtons[i].addEventListener('click' , () => this.close(this));
		}

	}

	close(obj)	{

		this.updateHash('');

		return true;

	};

	open(id) {
		this.updateHash(id);
	};

	updateHash(id) {
		
		let top  = window.pageYOffset || document.documentElement.scrollTop;
		let left = window.pageXOffset || document.documentElement.scrollLeft;

		window.location.hash = id;

		window.scrollTo(left, top);
	};

}
