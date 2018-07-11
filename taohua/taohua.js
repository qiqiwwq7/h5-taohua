$(function () {
    /*** 花瓣 ***/
    $(function() {
        var snowflakeURl = [
            './images/hua/icon_petal_1.png',
            './images/hua/icon_petal_2.png',
            './images/hua/icon_petal_3.png',
            './images/hua/icon_petal_4.png',
            './images/hua/icon_petal_5.png',
            './images/hua/icon_petal_6.png',
            './images/hua/icon_petal_7.png',
            './images/hua/icon_petal_8.png',
            './images/hua/icon_petal_9.png',
            './images/hua/icon_petal_10.png',
            './images/hua/icon_petal_11.png',
        ]  
        var container = $("#content");
        visualWidth = container.width();
        visualHeight = container.height();
    　　//获取content的宽高
        function snowflake() {
            // 雪花容器
            var $flakeContainer = $('#snowflake');
            // 随机六张图
            function getImagesName() {
                return snowflakeURl[[Math.floor(Math.random() * 11)]];
            }
            // 创建一个雪花元素
            function createSnowBox() {
                var url = getImagesName();
                return $('<div class="snowbox" />').css({
                    'width': 25,
                    'height': 26,
                    'position': 'absolute',
                    'backgroundRepeat':'no-repeat',
                    'zIndex': 100000,
                    'top': '-20px',
                    'backgroundImage': 'url(' + url + ')',
                    'backgroundSize': '60%'
                }).addClass('snowRoll');
            }
            // 开始飘花
            setInterval(function() {
                // 运动的轨迹
                var startPositionLeft = Math.random() * visualWidth - 100,
                    startOpacity    = 1,
                    endPositionTop  = visualHeight - 40,
                    endPositionLeft = startPositionLeft - 100 + Math.random() * 500,
                    duration        = visualHeight * 15 + Math.random() * 5000;
                // 随机透明度，不小于0.5
                var randomStart = Math.random();
                randomStart = randomStart < 0.5 ? startOpacity : randomStart;
                // 创建一个雪花
                var $flake = createSnowBox();
                // 设计起点位置
                $flake.css({
                    left: startPositionLeft,
                    opacity : randomStart
                });
                // 加入到容器
                $flakeContainer.append($flake);
                // 开始执行动画
                $flake.transition({
                    top: endPositionTop + 50,
                    left: endPositionLeft,
                    opacity: 0.7
                }, duration, 'ease-out', function() {
                    $(this).fadeOut(500);
                    $(this).remove() //结束后删除
                });
            }, 500);
        }
        snowflake()
    　　　//执行函数
    })

    /*** 图片 ***/
    $(function() {
        var className = [
            'animationText1', 
            'animationText2', 
            'animationText3', 
            'animationText4', 
            'animationText5'
        ];  
        var imgs = [
            './images/ren-1.png',
            './images/ren-2.png',
            './images/ren-3.png',
            './images/ren-4.png',
            './images/ren-5.jpg'
        ]
        var num = 0
        $.each(imgs, function(i) {
            $(".text").append('<div class="text-img animation-th-text animationText' + (i+1) +'"><div class="text-center"></div></div>');
            $('.text-img .text-center').eq(i).attr('style', function () {
                return 'background: url(' + imgs[i] + ') no-repeat center;'
            })
        })
        $(".text-img").eq(0).show()
        var move = function() {
            num ++
            if (num > imgs.length-1) {
                num = 0
                clearInterval(time)
                $(".text-img").hide();
                $(".again-watch").fadeIn(1000);
                return;
            }
            $(".text-img").hide();
            $(".text-img").eq(num).show()
        }
        var time = setInterval(move, 5000)

        $(".again-watch").click(function () {
            $(".again-watch").fadeOut(1000, function () {
                $(".text-img").eq(0).show()
                time = setInterval(move, 5000)
            })
        })
        
        /*** 音乐播放器 ***/
        $('.music-button img').click(function () {
            var audioPlay = $('#musicfx')[0];
            if (audioPlay.paused) {
                $('.music-pause').hide();
                $('.music-play').show();
                audioPlay.play();
            } else {
                $('.music-play').hide();
                $('.music-pause').show();
                audioPlay.pause();
            }
        })
    })

})
