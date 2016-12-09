/**
 * Created by Administrator on 2016/8/29.
 */
$(function(){
    var router = new Router({
        container: '#container',
        enterTimeout: 0,
        leaveTimeout: 0
    });

    // login
    var login = {
        url: '/',
        className: 'login',
        render: function () {
            return $('#tpl_login').html();
        },
        bind:function(){
            $(".layout-header").hide();
        }
    };

    // index
    var indexPage = {
        url: '/index',
        className: 'indexPage',
        render: function () {
            return $('#tpl_index').html();
        },
        bind:function(){
            $(".layout-header").show().find(".page-title").text("系统信息列表");
        }
    };
    // 登记历史列表
    var listPage = {
        url: '/list',
        className: 'listPage',
        render: function () {
            return $('#tpl_list').html();
        },
        bind:function() {
            $(".layout-header").show().find(".page-title").text("历史检查");
            $('#container').on('click', '.weui_tabbar_item', function () {
                var nar_index = $(this).index();
                var nar_title = $(this).find(".weui_tabbar_label").text();
                console.info(nar_index);

                $(".layout-header").find(".page-title").text(nar_title);

                $(".nav-item-cont").eq(nar_index).show().siblings(".nav-item-cont").hide();
                $(this).addClass('weui_bar_item_on').siblings('.weui_bar_item_on').removeClass('weui_bar_item_on');
            });
            $('#container').on('click', '.btn-addCountry', function () {
                $('#add-country').show().on('click', '.weui_btn_dialog', function () {
                    $('#add-country').off('click').hide();
                });
            }).on('click', '.btn-addPort', function () {
                $('#add-port').show().on('click', '.weui_btn_dialog', function () {
                    $('#add-port').off('click').hide();
                });
            });
            $("#js-upload").click(function(e){
                event.stopPropagation();
                alert("开始长传");
            });
        }
    };

    router.push(login)
        .push(listPage)
        .push(indexPage)
        .setDefault('/')
        .init();
});