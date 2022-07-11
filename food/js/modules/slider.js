function slider({container,slide, nextArrow, prevArrow,totalCounter,currentCounter,wrapper,field}){

	function getZero(num){
		if(num>=0&& num<10){
			return `0${num}`;

		}else{
			return num;
		}
	}

	const slides = document.querySelectorAll(slide),
		slider = document.querySelector(container),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
		slidesWrapper = document.querySelector(wrapper),
		slidesFiled = document.querySelector(field),
		width = window.getComputedStyle(slidesWrapper).width;
	let slideIndex = 3;
	let offset = width.slice(0,width.length-2)*(slideIndex-1);
	slidesFiled.style.transform = `translateX(-${offset}px)`;
	slidesFiled.style.width = 100 * slides.length + `%`;
	slidesFiled.style.display = 'flex';
	slidesFiled.style.transition = '0.5s all';
	slidesWrapper.style.overflow = 'hidden';

	total.textContent= getZero(slides.length)
	
	slides.forEach(slide => {
		slide.style.width = width;
	})

	slider.style.position = 'relative';

	const indicator = document.createElement('ol'),
		  dots =[];
	indicator.classList.add('carusel-indicators');
	indicator.style.cssText =`
		position: absolute;
    	right: 0;
    	bottom: 0;
    	left: 0;
    	z-index: 15;
    	display: flex;
    	justify-content: center;
    	margin-right: 15%;
    	margin-left: 15%;
    	list-style: none;
	`;
	slider.append(indicator);

	for(let i =0;i< slides.length;i++){
		const dot = document.createElement('li');
		dot.setAttribute('data-slide-to',i+1);
		dot.style.cssText =  `
		  box-sizing: content-box;
    		flex: 0 1 auto;
    		width: 30px;
    		height: 6px;
    		margin-right: 3px;
    		margin-left: 3px;
    		cursor: pointer;
    		background-color: #fff;
    		background-clip: padding-box;
    		border-top: 10px solid transparent;
    		border-bottom: 10px solid transparent;
    		opacity: .5;
    		transition: opacity .6s ease;
		`;
		if(i==2){
			dot.style.opacity=1;
		}
		indicator.append(dot);
		dots.push(dot);
	}

	function onlyNums(width){
		return +width.replace(/\D/g, '');
	}

	next.addEventListener('click',()=>{
		if (offset == onlyNums(width) * (slides.length-1)){
			offset = 0;	
		} else{
			offset += onlyNums(width);
		}
		
		if(slideIndex == slides.length){
			slideIndex = 1;
		} else{
			slideIndex ++;
		}

		current.textContent = getZero(slideIndex);
		slidesFiled.style.transform = `translateX(-${offset}px)`;
		
		dots.forEach(dot =>dot.style.opacity='.5');
		dots[slideIndex-1].style.opacity =1;
	})
	prev.addEventListener('click',()=>{
		if (offset == 0){
			offset = onlyNums(width)*(slides.length-1);
		} else{
			offset -= onlyNums(width);
		}

		if(slideIndex == 1){
			slideIndex = slides.length;
		} else{
			slideIndex --;
		}
	

		current.textContent = getZero(slideIndex);
		slidesFiled.style.transform = `translateX(-${offset}px)`;

		dots.forEach(dot =>dot.style.opacity='.5');
		dots[slideIndex-1].style.opacity =1;
	})
	dots.forEach(dot=>{
		dot.addEventListener('click',(e)=>{
			const slideTo = e.target.getAttribute('data-slide-to');

			slideIndex = slideTo;
			offset = onlyNums(width)*(slideTo-1);

			slidesFiled.style.transform = `translateX(-${offset}px)`;
		
			current.textContent = getZero(slideIndex);

			dots.forEach(dot =>dot.style.opacity='.5');
			dots[slideIndex-1].style.opacity =1;
		})
	})
}
export default slider;