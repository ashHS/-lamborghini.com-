$(function(){
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
				$(this).css({"padding-left":"2px","transition":".2s"})
			},function(){
				$(this).css({"padding-left":"14px","transition":".2s"})
			});
			
		})