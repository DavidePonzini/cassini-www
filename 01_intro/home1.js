function add_button() {
	var elem = document.createElement('button');
	//elem.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000';
	elem.setAttribute("onClick", "click_button(this)");
	elem.id = "button";
	elem.innerHTML = "Cliccami";
	elem.setAttribute("c", 0);
	document.body.insertBefore(elem, document.body.firstChild);
}

function click_button(b) {
	c = b.getAttribute("c");
	b.innerHTML = "Cliccato! (" + c + ")";
	
	b.setAttribute("c", +c +1);
}