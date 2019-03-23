$(function(){
	
			// store图片放大
			$('.half>div').hover(function(){
				$(this).children().children().css({'transform':'scale(1.1,1.1)','transition':'1s'});
				// $('.half div').css('opacity','1');
			},function(){
				$(this).children().children().css({'transform':'scale(1,1)','transition':'1s'});
			});
			$('.full').hover(function(){
				$(this).children().children().css({'transform':'scale(1.1,1.1)','transition':'1s'});
				$('#store div:after').css('opacity','0');
			},function(){
				$(this).children().children().css({'transform':'scale(1,1)','transition':'1s'});
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
			
			//相册集
			//先加载图片
			for(var i=0;i<8;i++){
				var src = "images/urus/"+i.toString()+".jpg";
				var img = $("<img />").attr("src",src).attr("alt",i.toString()).attr("id",i.toString());
				$('.imgs .bottom').append(img)
				$('.imgs .bottom>img').wrap("<div></div>")
			}
			$('.imgs .bottom>div').click(function(){
				$('.right-img img').css("display","none")
				var src = $(this).children().attr("src");
				var alt = $(this).children().attr("alt");
				var nAlt = parseInt(alt);
				$('.right-img img').attr("src",src).attr("alt",nAlt).fadeIn()
			})
			
			// 技术规格
			$('#myCarousel ol li').click(function(){
				$(this).siblings().removeClass('active')
				$(this).addClass('active')
			})
			$('#myCarousel').carousel('pause');
			// 播放某个特定帧
			$('.slide-one').click(function(){
				$('#myCarousel').carousel(0);
			})
			$('.slide-two').click(function(){
				$('#myCarousel').carousel(1);
			})
			$('.slide-three').click(function(){
				$('#myCarousel').carousel(2);
			})
			$('.slide-four').click(function(){
				$('#myCarousel').carousel(3);
			})
			$('.slide-five').click(function(){
				$('#myCarousel').carousel(4);
			})
			$('.slide-six').click(function(){
				$('#myCarousel').carousel(5);
			})
			$('.slide-seven').click(function(){
				$('#myCarousel').carousel(6);
			})
			
			
			// store去掉阴影
			$('#store .half>div').hover(function(){
				$(this).addClass('white');
			},function(){
				$(this).removeClass('white');
			})
			//相册去掉阴影
			$('.imgs .bottom>div').hover(function(){
				$(this).addClass('white');				
			},function(){
				$(this).removeClass('white');
			})
		})