function select(elem) {
    console.log('selecting image...')

    let img = $(elem)

	if(img.hasClass('selected'))
		img.removeClass('selected')
	else
		img.addClass('selected')
}