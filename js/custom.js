$(document).ready(function () {



  let text = document.getElementById("loadMore");
  $(".default_option").click(function () {
    $(this).parent().toggleClass("active");
    text.innerHTML = "Show all plans";
  })

  $(".select_ul li").click(function () {
    var currentele = $(this).html();
    $(".default_option li").html(currentele);
    $(this).parents(".select_wrap").removeClass("active");
    var id = $(".select_wrap .tab").attr('data-id');
    $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
    $('.wrapper .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;

  });


  // $(function () {
  //   if ($(".moreBox:hidden").length != 0) {
  //     $("#loadMore").fadeIn('slow');
  //   }
  //   $(".moreBox").slice(0, 1).show();
  //   $("#loadMore").on('click', function (e) {
  //     e.preventDefault();
  //     $(".moreBox:hidden").slice(0, 4).slideDown();
  //     if ($(".moreBox:hidden").length == 0) {
  //       // $("#loadMore").fadeOut('slow');
  //       // $(".moreBox:hidden").slice(0, 1).show();
  //     }
  //   });
  // });

  $("#loadMore").click(function () {

    if ($(this).text() == 'Hide last plans') {
      text.innerHTML = "Show all plans";
      $(".pricing-plans__column").hide();
      $(".pricing-plans__column.active-tab").show();
    } else {
      $(this).text() == ('Show all plans');
      $(".pricing-plans__column").show();
      text.innerHTML = "Hide last plans";
    }
    return false;
  });

  // $('#loadMore').click(function () {
  //   $('.pricing-plans__column').slideToggle("slow");
  // });


  // $body = $("body");

  // $(document).on({
  //   ajaxStart: function () {
  //     $body.addClass("loading");
  //   },
  //   ajaxStop: function () {
  //     $body.removeClass("loading");
  //   }
  // });

  // // Initiates an AJAX request on click
  // $(".btn-show").on("click", function () {
  //   $.get("/mockjax");
  // });



  // $("#loadMore").on("click", function () {
  //   var $this = $(this);
  //   var $content = $this.parent().prev("pricing-plans__items");
  //   var linkText = $this.text().toUpperCase();

  //   if (linkText === "Show all plans") {
  //     linkText = "Show less";
  //     $content.switchClass("hideContent", "showContent", 400);
  //   } else {
  //     linkText = "Show all plans";
  //     $content.switchClass("showContent", "hideContent", 400);
  //   };

  //   $this.text(linkText);
  // });










  // $(".pricing-plans__column").slice(0, 1).show();
  // if ($(".item-box:hidden").length != 0) {
  //   $("#loadMore").show();
  // }
  // $("#loadMore").on('click', function (e) {
  //   e.preventDefault();
  //   $(".pricing-plans__column:hidden").slice(0, 4).slideDown();
  //   if ($(".pricing-plans__column:hidden").length == 0) {
  //     $("#loadMore").fadeOut('slow');
  //   }
  // });


  // $(".moreBox").slice(0, 1).show();
  // if ($(".blogBox:hidden").length != 0) {
  //   $("#loadMore").show();
  // }
  // $("#loadMore").on('click', function (e) {
  //   e.preventDefault();
  //   $(".moreBox:hidden").slice(0, 4).slideDown();
  //   if ($(".moreBox:hidden").length == 0) {
  //     $("#loadMore").fadeOut('slow');
  //   }
  // });



  // $(".moreBox").slice(0, 1).show();
  // if ($(".blogBox:hidden").length != 0) {
  //   $("#loadMore").show();
  // }
  // $("#loadMore").on('click', function (e) {
  //   e.preventDefault();
  //   $(".moreBox:hidden").slice(0, 4).slideDown();
  //   if ($(".moreBox:hidden").length == 0) {
  //     $("#loadMore").fadeOut('slow');
  //   } 
  // });



});