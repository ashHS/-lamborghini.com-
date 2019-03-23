$(function(){
			// 发现更多
			$('.more').hover(function(){
				$('.more>p').css('color','white');
				$('.more>span').css('color','white');
				$('.discover_more').css('border-color','transparent transparent #dfb400');
			},function(){
				$('.more>p').css('color','#000');
				$('.more>span').css('color','#000');
				$('.discover_more').css('border-color','transparent transparent #fff');
			});
			// 图片放大
			$('#news img').hover(function(){
				$(this).css({'transform':'scale(1.1,1.1)','transition':'.5s'});
			},function(){
				$(this).css({'transform':'scale(1,1)','transition':'.5s'});
			});
			$('#news .yinying').hover(function(){
				$(this).siblings().css({'transform':'scale(1.1,1.1)','transition':'.5s'});
			},function(){
				$(this).siblings().css({'transform':'scale(1,1)','transition':'.5s'});
			});
			$('#actives img').hover(function(){
				$(this).css({'transform':'scale(1.1,1.1)','transition':'.5s'});
			},function(){
				$(this).css({'transform':'scale(1,1)','transition':'.5s'});
			});
			$('#actives .yinying').hover(function(){
				$(this).siblings().css({'transform':'scale(1.1,1.1)','transition':'.5s'});
			},function(){
				$(this).siblings().css({'transform':'scale(1,1)','transition':'.5s'});
			});
			// 下拉菜单
			// 展开
			$('#index_top>.menu>ul>li>.zhan').hover(function(){
				
				$('#index_top>.shadow').css({'top':'-100px','transition':'.5s'});
				// 分类
				if($(this).hasClass('chexing')){
					$('.shadow>ul').siblings().removeClass('shown')
					$('.shadow>.chexing').addClass('shown')
				}else if($(this).hasClass('pinpai')){
					$('.shadow>ul').siblings().removeClass('shown')
					$('.shadow>.pinpai').addClass('shown')
				}else if($(this).hasClass('fuwu')){
					$('.shadow>ul').siblings().removeClass('shown')
					$('.shadow>.fuwu').addClass('shown')
				}else if($(this).hasClass('tiyan')){
					$('.shadow>ul').siblings().removeClass('shown')
					$('.shadow>.tiyan').addClass('shown')
				}
			});
			
			$('#index_top>.menu>ul>li').mouseover(function(){
				$(this).addClass('active');
				$(this).siblings().removeClass('active');
			})
			
			// 
			$('.shadow').hover(function(){
				$('.shadow').css({'top':'-100px','transition':'.5s'});
			},function(){
				$('.shadow').css({'top':'-550px','transition':'.5s'});
			});
			
			// 收起
			$('#index_top>.menu>ul>li>.shou').hover(function(){
				$('#index_top>.shadow').css({'top':'-550px','transition':'.5s'});
				$('.shadow>ul').removeClass('shown')
			},function(){
				$('.shadow>ul').removeClass('shown')
			});
			// 按钮样式
			$('.btn').hover(function(){
				$(this).css({"padding-left":"6px","transition":".2s"})
			},function(){
				$(this).css({"padding-left":"19px","transition":".2s"})
			});
			
			//diy
			$('#img1').hover(function(){
				$(this).siblings().css('clip-path','polygon(75% 0,100% 0,100% 100%,45% 100%)')
			},function(){
				$(this).siblings().css('clip-path','polygon(65% 0, 100% 0, 100% 100%, 35% 100%)')
			});
			$('#img2').hover(function(){
				$(this).css('clip-path','polygon(55% 0,100% 0,100% 100%,25% 100%)')
			},function(){
				$(this).css('clip-path','polygon(65% 0, 100% 0, 100% 100%, 35% 100%)')
			});
		})