$(document).ready(function(){
	$('#help-menu').click(function(){
		var suport = $(this).attr('val');
		if(suport == 0){
			$("#help").animate({'left': '-100%'}, 500, function(){});
			$(this).attr('val',1);
			$('#help-menu i').removeClass('fa-reply-all').addClass('fa-mail-forward');
		}else{
			$("#help").animate({'left': 0}, 500, function(){});
			$(this).attr('val',0);
			$('#help-menu i').removeClass('fa-mail-forward').addClass('fa-reply-all');
		}
		return false;
	});
	
	// Su kien chuot tren laptop//
    $('.mouse').mousedown(function(event){
		$(this).attr('mousedown', event.pageX);
    });
    $('.mouse').mouseup(function(event){ 
			$(this).attr('mouseup', event.pageX);
		var mouseDown = parseInt($(this).attr('mousedown'));
		var mouseUp   = parseInt($(this).attr('mouseup'));
			if(mouseDown>mouseUp){
				$(this).removeClass('mouse-left');
				$(this).addClass('mouse-acvite');
				
			}else if(mouseDown<mouseUp){
				$(this).removeClass('mouse-acvite');
				$(this).addClass('mouse-left');
			}
    });
	
	// Su kien chuot tren phone//
	$('.mouse .mouse-left').on('touchend', function(e){
        $(this).parents('.mouse').toggleClass('mouse-acvite');
		e.preventDefault();
    });
	$( ".editrow" ).dblclick(function() {
		var url = $(this).attr('rote');
		location.href=url;
	});
	
	$( ".mouse .mouse-left i.fa").click(function(){
		var acvite = $(this).attr('acvite');
		var rote   = $(this).attr('rote');
		if(acvite==0){
			$('#'+rote).addClass('mouse-acvite');
			$(this).attr('acvite', 1);
			
			$(this).removeClass('fa-angle-left');
			$(this).addClass('fa-angle-right');
		}else{
			$('#'+rote).removeClass('mouse-acvite');
			$(this).attr('acvite', 0);
			
			$(this).removeClass('fa-angle-right');
			$(this).addClass('fa-angle-left');
		}
	});
	
	$( ".editrow").click(function(){
		var check = $(this).attr('check');
		if(check=='false'){
			$(this).addClass('vnsacvite');
			$(this).attr('check','true');
			
		}else{
			$(this).removeClass('vnsacvite');
			$(this).attr('check','false');
		}
	});
	
	$('.post-click').click(function(){
		var click = $(this).attr('click');
		
		if(click == 0){
			$(this).attr('click', 1);
			$(this).find('i').removeClass('fa fa-chevron-up').addClass('fa fa-chevron-down');
			$('#post-vied').addClass('table-block').removeClass('table-none');
		}else{
			$(this).attr('click', 0);
			$(this).find('i').removeClass('fa fa-chevron-down').addClass('fa fa-chevron-up');
			$('#post-vied').addClass('table-none').removeClass('table-block');
			
		}
		return false;
	});
	
	$('.cuoc-click').click(function(){
		var click = $(this).attr('click');
		
		if(click == 0){
			$(this).attr('click', 1);
			$(this).find('i').removeClass('fa fa-chevron-down').addClass('fa fa-chevron-up');
			$('#cuoc-vied').find('table').removeClass('table-block');
		}else{
			$(this).attr('click', 0);
			$(this).find('i').removeClass('fa fa-chevron-up').addClass('fa fa-chevron-down');
			$('#cuoc-vied').find('table').addClass('table-block');
		}
		return false;
	});
	
	$('.row-click .report-click').click(function(){
		var click     = $(this).attr('click');
		var divParent = $(this).parents('.row-click');
		if(click==0){
			$(this).attr('click', 1);
			$(this).find('i').removeClass('fa fa-chevron-down').addClass('fa fa-chevron-up');
			
			divParent.find('.khach').removeClass('hidden');
			divParent.find('.chu').addClass('hidden');
		}else{
			$(this).attr('click', 0);
			$(this).find('i').removeClass('fa fa-chevron-up').addClass('fa fa-chevron-down');
			
			divParent.find('.khach').addClass('hidden');
			divParent.find('.chu').addClass('hidden');
		}
		return false;
	});
});
	
function onAcvite(value){
	var onAcvite = $('#no-acvite').attr('rote');
		if(onAcvite==0){
			$('#lockytu').addClass('set-acvite');
			$('#kiemtra').removeClass('set-acvite');
			$('#luudulieu').removeClass('set-acvite');
			alert('Báº¡n chÆ°a lá»c kÃ½ tá»±');
		}
		if(onAcvite==1){
			$('#lockytu').removeClass('set-acvite');
			$('#kiemtra').addClass('set-acvite');
			$('#luudulieu').removeClass('set-acvite');
			alert('Báº¡n chÆ°a kiá»ƒm tra cÃº phÃ¡p');
		}
		if(value==3 && onAcvite>1){onSubmit();}
		if(value==4 && onAcvite>1){onSubmit(1);}
}

function onSubmit(value){
	if(value == 1){
		document.main.id.value= 0;
	}if(value == 2){
		document.main.refuse.value= -1;
	}
	document.main.submit();
}

function formSubmit(){
	document.main.submit();
}

function infloat(number){
		decimals      = 2;
		dec_point     = '.';
		thousands_sep = '';
		number        = (number + '').replace(/[^0-9+\-Ee.]/g, '');
		
	var n = !isFinite(+number)? 0:+number,
		prec = !isFinite(+decimals)? 0 : Math.abs(decimals),
		sep  = (typeof thousands_sep === 'undefined')? '.':thousands_sep,
		dec  = (typeof dec_point     === 'undefined')? ',':dec_point,
		s    = '',
		toFixedFix = function(n, prec){
			var k  = Math.pow(10, prec);
				return '' + (Math.round(n * k) / k).toFixed(prec);
		};
		
		// Fix for IE parseFloat(0.55).toFixed(0) = 0;
		s = (prec ? toFixedFix(n, prec):'' + Math.round(n)).split('.');
		if(s[0].length > 3){
			s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
		}
		
		if((s[1] || '').length < prec){
			s[1]  = s[1] || '';
			s[1] += new Array(prec - s[1].length + 1)
			.join('0');
		}
	var reNumber = s.join(dec).split('.');
		if(reNumber[1]=='00'){
			return reNumber[0];
		}else{
			return reNumber[0]+'.'+reNumber[1];
		}
}
function submitConfirm(){
	if(confirm("Báº¡n cÃ³ cháº¯c muá»‘n thá»±c hiá»‡n?")) {
		formSubmit();
	}else{
		return;
	}
}

function deleteConfirm(url){
	if(confirm("Báº¡n cÃ³ cháº¯c muá»‘n xÃ³a khÃ´ng?")) {
		//Thá»±c hiá»‡n
		window.location.replace(url);
	}else{
		return;
	}
}

function innumber(number, decimals, dec_point, thousands_sep){
  
  number = (number + '')
    .replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? '.' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? ',' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + (Math.round(n * k) / k)
        .toFixed(prec);
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
    .split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '')
    .length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1)
      .join('0');
  }
  return s.join(dec);
}

function unnumber(number) {
	return parseInt(number.replace(/( |,|\.)/g, ""));
}

function confirmDelete(redirect){
	var result = confirm("Báº¡n cháº¯c cháº¯n muá»‘n xÃ³a");
	if(result){
		window.location.href = redirect;
		return true;
		//Logic to delete the item
	}else{
		return false;
	}
}

function coppyEle(idValue){
	alert('Báº¡n Ä‘Ã£ coppy thÃ nh cÃ´ng');
	const elementToSelect = document.getElementById(idValue);
	const range           = document.createRange();
	const selection       = window.getSelection();
	selection.removeAllRanges();
	range.selectNode(elementToSelect);
	selection.addRange(range);
	document.execCommand('Copy');
}

function selectEle(toEror, frEror){
	const input = document.getElementById('baccuoc');  
	input.focus();
	input.setSelectionRange(toEror, frEror);
}