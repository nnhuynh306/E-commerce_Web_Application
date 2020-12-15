var perfume = $("#perfume");
var fashion = $("#fashion");
var skincare = $("#skincare");
var cosmetic = $("#cosmetic");
var all = $("#all");

perfume.click(function()
{
      $("#all").removeClass("active");
      $("#cosmetic").removeClass("active");
      $("#fashion").removeClass("active");
      $("#skincare").removeClass("active");
      element = document.getElementById("perfume");
      element.classList.add("active")
//Sử dụng phương thức Ajax.
  $.ajax({
        type : 'GET', //Sử dụng kiểu gửi dữ liệu POST
        url : '/shop-fullwidth-4col/perfume', //gửi dữ liệu sang trang perfume
        success : function(Product)  // Hàm thực thi khi nhận dữ liệu được từ server
                  { 
                       
                       let parser = new DOMParser();
                       let parsedHtml = parser.parseFromString(Product, 'text/html');
                       $('#sanpham').html(parsedHtml.querySelector("#sanpham"));
                  }
        });
        return false;
  });
cosmetic.click(function()
{
      $("#all").removeClass("active");
      $("#perfume").removeClass("active");
      $("#fashion").removeClass("active");
      $("#skincare").removeClass("active");
      element = document.getElementById("cosmetic");
      element.classList.add("active")
//Sử dụng phương thức Ajax.
  $.ajax({
        type : 'GET', //Sử dụng kiểu gửi dữ liệu POST
        url : '/shop-fullwidth-4col/cosmetic', //gửi dữ liệu sang trang perfume
        success : function(Product)  // Hàm thực thi khi nhận dữ liệu được từ server
                  { 
                       
                       let parser = new DOMParser();
                       let parsedHtml = parser.parseFromString(Product, 'text/html');
                       $('#sanpham').html(parsedHtml.querySelector("#sanpham"));
                  }
        });
        return false;
  });
fashion.click(function()
{
      $("#perfume").removeClass("active");
      $("#cosmetic").removeClass("active");
      $("#all").removeClass("active");
      $("#skincare").removeClass("active");
      element = document.getElementById("fashion");
      element.classList.add("active")
//Sử dụng phương thức Ajax.
  $.ajax({
        
        type : 'GET', //Sử dụng kiểu gửi dữ liệu POST
        url : '/shop-fullwidth-4col/fashion', //gửi dữ liệu sang trang perfume
        success : function(Product)  // Hàm thực thi khi nhận dữ liệu được từ server
                  { 
                       
                       let parser = new DOMParser();
                       let parsedHtml = parser.parseFromString(Product, 'text/html');
                       $('#sanpham').html(parsedHtml.querySelector("#sanpham"));
                  }
        });
        return false;
  });
skincare.click(function()
{
      $("#perfume").removeClass("active");
      $("#cosmetic").removeClass("active");
      $("#fashion").removeClass("active");
      $("#all").removeClass("active");
      element = document.getElementById("skincare");
      element.classList.add("active")
//Sử dụng phương thức Ajax.
  $.ajax({
        type : 'GET', //Sử dụng kiểu gửi dữ liệu POST
        url : '/shop-fullwidth-4col/skincare', //gửi dữ liệu sang trang perfume
        success : function(Product)  // Hàm thực thi khi nhận dữ liệu được từ server
                  { 
                       
                       let parser = new DOMParser();
                       let parsedHtml = parser.parseFromString(Product, 'text/html');
                       $('#sanpham').html(parsedHtml.querySelector("#sanpham"));
                  }
        });
        return false;
  });

  all.click(function()
{
      $("#perfume").removeClass("active");
      $("#cosmetic").removeClass("active");
      $("#fashion").removeClass("active");
      $("#skincare").removeClass("active");
      element = document.getElementById("all");
      element.classList.add("active")
//Sử dụng phương thức Ajax.
  $.ajax({
        type : 'GET', //Sử dụng kiểu gửi dữ liệu POST
        url : '/shop-fullwidth-4col', //gửi dữ liệu sang trang perfume
        success : function(Product)  // Hàm thực thi khi nhận dữ liệu được từ server
                  { 
                       
                       let parser = new DOMParser();
                       let parsedHtml = parser.parseFromString(Product, 'text/html');
                       $('#sanpham').html(parsedHtml.querySelector("#sanpham"));
                  }
        });
        return false;
  });