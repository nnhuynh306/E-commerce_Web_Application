'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      var Products = [
      {
        name: 'Versace Pour Homme Dylan',
        stock: 10,
        brand: 'Versace',
        description: 'Vào cuối tháng 7/2016, Versace ra mắt Dylan Blue, một hương thơm mới từ bộ sưu tập Versace Pour Homme theo giấy phép của Euroitalia, trong đó bao gồm bản gốc từ năm 2008 và các phiên bản Oud Noir từ năm 2013.Versace Dylan Blue là hương thơm của chàng trai hiện đại. Một mùi hương thể hiện đầy đủ những cá tính, sức mạnh và cả tài năng của họ. Truyền tải mùi hương truyền thống, nhưng theo cách vô cùng hiện đại và tươi mới cho hôm nay và ngày mai”. Là mùi hương mang dấu ấn đặc biệt của các loại gỗ thơm thiên nhiên quý hiếm. Bằng phương pháp tinh chế khéo léo, Versace Dylan Blue mở đầu bằng hương thơm mới mẻ của hỗn hợp cam, chanh và bưởi pha trộn cùng hương lá sung ẩn hiện tạo cảm giác thanh mát sắc sảo mang hương vị Địa Trung Hải. Hương biển quyến rũ, lá Violet và một chút hương tiêu đen ở tầng hương thứ hai góp thêm chút rắn rỏi cho người đàn ông. Nhưng mùi hương tinh tế của gỗ, long diên hương, giấy cói và hoắc hương mới chính là thành phần tạo nên sự quyền lực và mạnh mẽ của hương nước hoa này. Cuối cùng khép lại bằng sự quyến rũ ấm áp của xạ hương và khoáng chất. Chai nước hoa mang hình dáng thiết kế vượt thời gian với gam màu thu hút người đối diện ngay từ cái nhìn đầu tiên – xanh dương sáng và vàng gold. Các đường kẻ trên thân chai được điêu khắc tỉ mỉ cùng với biểu tượng quen thuộc của Versace – hình đầu rắn Medusa. Hương thơm phù hợp khi đi làm, những buổi tiệc sang trọng hay những cuộc hẹn hò lãng mạn.',
        price: 100,
        imagePath: './../images/Perfume/Versace Pour Homme Dylan.jpg'
      },{
        name: 'Lancome Tresor',
        stock: 10,
        brand: 'Lancôme',
        description: 'Lancome Tresor được mệnh danh là kho báu quý giá trong làng nước hoa biểu tượng cho phái đẹp (Tresor trong tiếng Pháp có nghĩa là kho báu). Lancome Tresor là một trong những nhãn hiệu nước hoa nữ bán chạy nhất và phổ biến nhất trên thế giới cho đến ngày nay. Sản phẩm mang cảm hứng hương vị hoa cỏ phương Đông ấm áp cuốn hút phái đẹp, được giới thiệu vào năm 1990. Tượng trưng cho mùi hương thanh lịch, khơi dậy màu xanh nền nã êm dịu của tử đinh hương ngay từ những hương vị đầu tiên rồi dẫn dắt ta vào khu vườn hồng trắng tỏa hương thơm ngát. Diên vĩ và vòi voi nhanh chóng hòa lẫn vào không gian của hương thơm gợi lên phong vị hoa cỏ lôi cuốn xinh đẹp mềm mại nhưng không quá sôi động. Vị đàn hương tươi đẹp càng tạo điểm nhấn cho lớp hương. Hương giữa lôi cuốn người sử dụng bằng tinh chất ấm áp ngọt ngào, thoang thoảng hương đào và bùng nổ một liều hoa mơ mạnh mẽ. Sự hòa quyện tuyệt vời của hương đào, lan chuông và tử đinh hương che giấu bớt vị ngọt mãnh liệt. Gỗ đàn hương như một bức tranh nền hài hòa níu giữ mọi hương thơm bất ngờ lan tỏa vị trầm lắng của vani và hổ phách. Tất cả tạo nên một chất vị thật êm dịu và mượt mà. Mẫu chai Tresor đã trở thành một huyền thoại gợi lên hình ảnh một chiếc kim tự tháp thủy tinh lật ngược tinh tế, hệt như một viên kim cương lộng lẫy tọa lạc trong chiếc hộp châu báu. Lancome Tresor không chỉ mang lại sự hài lòng mà còn gợi lên chiều sâu tâm hồn và cá tính tuyệt đối.',
        price: 90,
        imagePath: './../images/Perfume/Lancome Tresor.png'
      },{
        name: '212 Sexy Men',
        stock: 10,
        brand: 'Carolina Herrera',
        description: '212 Sexy Men được cho ra mắt vào năm 2006, sở hữu một hương thơm nồng ấm, gợi cảm và tinh tế được sáng chế tác hai nhà sáng chế nước hoa là Alberto Morillas và Rosendo Mateu. Hương thơm 212 Sexy Men thể hiện hình mẫu các chàng trai thành thị sành điệu và rất biết cách thể hiện mình, đặc biệt muốn tạo ấn tượng và thể hiện sức quyến rũ đối với nữ giới. Đây là một hương thơm gợi cảm, tươi mát theo xu hướng phương Đông. Carolina Herrera nói rằng bà đã lấy cảm hứng cho loại nước hoa này bằng cách pha trộn giữa phong cách hiện đại của thành phố New York và những đêm phương Đông huyền bí. Hương thơm từ bạch đậu khấu, hồ tiêu và hổ phách được kết hợp một cách tinh tế ở lớp hương đầu gợi ý lên cảnh tượng tuyệt đẹp trong một nhà hàng Ấn sang trọng, nơi hương cà ri phảng phất thơm nồng. Và rất nhanh chóng, Hương Va ni như một khu rừng huyền bí sẽ làm dịu đi lớp hương đầu tạo nên một 212 Sexy men đầy mạnh mẽ nhưng cũng rất ngọt ngào. Giờ đây khi lớp hương đầu đã lùi về phía sau để làm nên, sẽ chỉ còn lại mùi gỗ thơm ngát, hương hổ phách nồng ấm, mùi quýt tươi và phản phất đâu đó một chút hương hoa nhẹ nhàng quyến rũ. Mọi hương thơm được kết hợp một cách tinh tế hài hòa, đặc biệt nếu như so với các dòng nước hoa Va ni khác thì 212 Sexy Men thật sự đã làm tốt hơn rất nhiều để đem lại một mùi hương Va ni đầy quyến rũ và mạnh mẽ. Tương tự như hương thơm đặc trưng, thiết kế chai cũng mang lại sự tinh tế đầy nam tính. Đặc biệt sự kết hợp tinh tế trong thiết kế bằng kim loại với cách đóng và mở nắp chai cũng làm toát lên sự rắn chắc và mạnh mẽ.212 Sexy Men sẽ là dòng nước hoa lý tưởng mà bất kỳ người đàn ông hiện đại nào cũng ao ước bổ sung vào bộ sưu tập của mình. Với hương thơm từ quýt tươi, gỗ ấm hứa hẹn sẽ là sự lựa chọn hoàn hảo để sử dụng ở bất kỳ dịp nào',
        price: 110,
        imagePath: './../images/Perfume/212 Sexy Man.jpg'
      },{
        name: 'Viktor & Rolf Bon Bon',
        stock: 100,
        brand: 'Viktor & Rolf',
        description: 'Viktor Rolf đã cho ra đời một mùi hương mới dành riêng cho phái đẹp mang tên Bon Bon vào mùa xuân năm 2014. Hương thơm mới sở hữu tên gọi của kẹo ngọt với mục tiêu tôn vinh những người phụ nữ biết thưởng thức những khoái cảm cũng như những giây phút thư giãn, thăng hoa trong cuộc sống. Các thành phần hương liệu của mùi hương được sáng tạo bởi Cecile Matton và Serge Majoullier.BonBon toát lên sức sáng tạo tuyệt vời từ tinh chất cam, quýt lộng lẫy kết tinh thành những viên đường caramel gói gọn vị hoa quả căng mọng. Hương thơm ngọt ngào của đào ve vãn nhẹ nhàng với vị caramel dẻo dai như bám lấy bề mặt mượt mà của quả đào. Chiết xuất hoa cam ngọt ngào hòa quyện vào không gian đường caramel mềm mại và nâng niu những tia nắng rạng rỡ của hoa nhài. Khi bay hơi, hương gỗ tỏa hương với sự hòa quyện lãng mạn giữa tuyết tùng, gỗ Guaiac và đàn hương khơi gợi xúc cảm quyến rũ khó cưỡng chấm phá những điểm sáng hổ phách rạng ngời vẽ nên vầng hào quang tuyệt đẹp lan tỏa hương thơm đến tận hơi thở cuối cùng. BonBon gây ấn tượng từ cái nhìn đầu tiên bởi thiết kế chai màu hồng hệt như một viên kẹo được gói trong bọc. Theo một cách nhìn khác thì thân chai còn có hình dáng giống với một chiêc nơ. Từ thiết kế đến kiểu dáng đều diễn tả sự bay bổng và nữ tính, dành cho các bạn nữ trẻ tuổi thích phong cách ngây thơ, trong sáng.',
        price: 100,
        imagePath: './../images/Perfume/Viktor & Rolf Bon Bon.jpg'
    },{
        name: 'Versace Pour Homme',
        stock: 1,
        brand: 'Versace',
        description: ' Versace Pour Homme là sự pha trộn các thành phần tinh chất có nguồn gốc Địa Trung Hải với hỗn hợp hương thơm hàng đầu rất phù hợp cho nam giới ngày nay: đó là những người đàn ông tri thức và tự tin, sống hài hòa với thế giới tự nhiên. Thông qua hương thơm đầy nam tính, dứt khoát, Versace Pour Homme liên kết sức mạnh và sự say mệ để tạo nên một người đàn ông năng động và thành đạt. Lớp hương đầu mở ra với mùi hương nhẹ nhàng và tươi mát của chi cam chanh vùng Diamante ở Calabria, phối hợp cùng lá và hoa của cây cam đắng tạo nên một hương thơm đặc trưng của vùng Địa Trung Hải. Hương giữa được pha trộn bởi những mùi hương hoa của lan dạ hương và phong lữ. Và lớp hương cuối nồng ấm là sự kết hợp của hổ phách, xạ hương và đậu tonka đem lại sự nam tính và gợi cảm. Được chiết xuất từ nguyên liệu thiên nhiên, nước hoa Versace Pour Homme Eau de Toilette có hương thơm nam tính, mạnh mẽ, quyến rũ. Versace Pour Homme Eau de Toilette sẽ giúp bạn trở nên tự tin, hấp dẫn hơn khi gặp gỡ bạn bè, hay tham gia vào những buổi tiệc quan trọng. Ngoài ra, với thiết kế vỏ ngoài đặc biệt, đơn giản nhưng không kém phần tinh tế và sang trọng với thiết kể cổ điển quen thuộc trong dung dịch màu xanh dịu nhẹ. Nổi bật nhất là chiếc nắp tròn mạ kim loại khắc tên thương hiệu xung quanh và biểu tượng nữ thần tóc rắn Medusa đặt phía trước thân chai sáng bóng.',
        price: 60,
        imagePath: './../images/Perfume/Versace Pour Homme.jpg'
    },{
        name: 'Daisy Dream Marc Jacobs',
        stock: 1,
        brand: 'Marc Jacobs',
        description: 'Thương hiệu Marc Jacobs đã tung ra nước hoa Daisy Dream vào mùa hè năm 2014 với tư cách là một phiên bản mới kế nhiệm từ nguyên mẫu nước hoa Daisy (2007) truyền thống. Daisy Dream là một phiên bản mơ mộng và tinh tế hơn so với phiên bản gốc. Tổ hợp của Dream được cấu tạo từ các nốt hương hoa cỏ và trái cây để mang lại một hiệu ứng “xanh”. Cũng như phiên bản gốc, Alberto Morillas chính là người đã sáng tạo ra mùi hương này, với sự hợp tác của Ann Gottlieb và chính bản thân Marc Jacobs. Daisy Dream bắt đầu với hương quả mọng và lê ướt át và hương nước dừa xuất hiện cũng khá sớm, hương thơm không quá nồng, vì mùi nước dừa khá khác biệt so với cơm dừa. Khi nước hoa bắt đầu lắng đọng, hương thơm của hoa tử đằng cùng với hương hoa nhài thoang thoảng bắt đầu tỏa hương, ngoài ra còn có sự giúp sức của hương vải, khiến cho mùi hương không những mềm mại, nữ tính mà còn mang cảm giác nhiệt đới. Lớp hương cuối khá cân bằng nhờ vào các hương gỗ trắng khiến cho nước hoa không trở nên quá ngọt và một ít xạ hương âm ỉ ở phía nền làm cho nước hoa toát lên một sự gợi cảm. Ban đầu bạn có thể nghĩ đây là một chai nước hoa ngọt, nhưng lớp hương cuối nồng nàn khiến cho hương thơm cân bằng và thú vị hơn. Chai nước hoa mang một thiết kế cách tân so với phiên bản Daisy gốc, với thân hình đã được bo tròn và các bông hoa cúc trắng toát dùng để trang trí. Một mùi hương ngọt ngào nhẹ nhàng với các nốt hương hoa cỏ và trái cây. Mang lại một cảm giác nữ tính thanh tao cho các quý cô ở mọi độ tuổi.',
        price: 49,
        imagePath: './../images/Perfume/Daisy Dream.png'
    },{
        name: 'Innisfree Aloe Revital Sleeping Pack',
        stock: 1,
        brand: 'Versace',
        description: 'Vào cuối tháng 7/2016, Versace ra mắt Dylan Blue, một hương thơm mới từ bộ sưu tập Versace Pour Homme theo giấy phép của Euroitalia, trong đó bao gồm bản gốc từ năm 2008 và các phiên bản Oud Noir từ năm 2013.Versace Dylan Blue là hương thơm của chàng trai hiện đại. Một mùi hương thể hiện đầy đủ những cá tính, sức mạnh và cả tài năng của họ. Truyền tải mùi hương truyền thống, nhưng theo cách vô cùng hiện đại và tươi mới cho hôm nay và ngày mai”. Là mùi hương mang dấu ấn đặc biệt của các loại gỗ thơm thiên nhiên quý hiếm. Bằng phương pháp tinh chế khéo léo, Versace Dylan Blue mở đầu bằng hương thơm mới mẻ của hỗn hợp cam, chanh và bưởi pha trộn cùng hương lá sung ẩn hiện tạo cảm giác thanh mát sắc sảo mang hương vị Địa Trung Hải. Hương biển quyến rũ, lá Violet và một chút hương tiêu đen ở tầng hương thứ hai góp thêm chút rắn rỏi cho người đàn ông. Nhưng mùi hương tinh tế của gỗ, long diên hương, giấy cói và hoắc hương mới chính là thành phần tạo nên sự quyền lực và mạnh mẽ của hương nước hoa này. Cuối cùng khép lại bằng sự quyến rũ ấm áp của xạ hương và khoáng chất. Chai nước hoa mang hình dáng thiết kế vượt thời gian với gam màu thu hút người đối diện ngay từ cái nhìn đầu tiên – xanh dương sáng và vàng gold. Các đường kẻ trên thân chai được điêu khắc tỉ mỉ cùng với biểu tượng quen thuộc của Versace – hình đầu rắn Medusa. Hương thơm phù hợp khi đi làm, những buổi tiệc sang trọng hay những cuộc hẹn hò lãng mạn.',
        price: 100,
        imagePath: './../images/Perfume/Versace Pour Homme Dylan.jpg'
    },{
        name: 'Versace Pour Homme Dylan',
        stock: 1,
        brand: 'Versace',
        description: 'Vào cuối tháng 7/2016, Versace ra mắt Dylan Blue, một hương thơm mới từ bộ sưu tập Versace Pour Homme theo giấy phép của Euroitalia, trong đó bao gồm bản gốc từ năm 2008 và các phiên bản Oud Noir từ năm 2013.Versace Dylan Blue là hương thơm của chàng trai hiện đại. Một mùi hương thể hiện đầy đủ những cá tính, sức mạnh và cả tài năng của họ. Truyền tải mùi hương truyền thống, nhưng theo cách vô cùng hiện đại và tươi mới cho hôm nay và ngày mai”. Là mùi hương mang dấu ấn đặc biệt của các loại gỗ thơm thiên nhiên quý hiếm. Bằng phương pháp tinh chế khéo léo, Versace Dylan Blue mở đầu bằng hương thơm mới mẻ của hỗn hợp cam, chanh và bưởi pha trộn cùng hương lá sung ẩn hiện tạo cảm giác thanh mát sắc sảo mang hương vị Địa Trung Hải. Hương biển quyến rũ, lá Violet và một chút hương tiêu đen ở tầng hương thứ hai góp thêm chút rắn rỏi cho người đàn ông. Nhưng mùi hương tinh tế của gỗ, long diên hương, giấy cói và hoắc hương mới chính là thành phần tạo nên sự quyền lực và mạnh mẽ của hương nước hoa này. Cuối cùng khép lại bằng sự quyến rũ ấm áp của xạ hương và khoáng chất. Chai nước hoa mang hình dáng thiết kế vượt thời gian với gam màu thu hút người đối diện ngay từ cái nhìn đầu tiên – xanh dương sáng và vàng gold. Các đường kẻ trên thân chai được điêu khắc tỉ mỉ cùng với biểu tượng quen thuộc của Versace – hình đầu rắn Medusa. Hương thơm phù hợp khi đi làm, những buổi tiệc sang trọng hay những cuộc hẹn hò lãng mạn.',
        price: 100,
        imagePath: './../images/Perfume/Versace Pour Homme Dylan.jpg'
    },{
        name: 'Versace Pour Homme Dylan',
        stock: 1,
        brand: 'Versace',
        description: 'Vào cuối tháng 7/2016, Versace ra mắt Dylan Blue, một hương thơm mới từ bộ sưu tập Versace Pour Homme theo giấy phép của Euroitalia, trong đó bao gồm bản gốc từ năm 2008 và các phiên bản Oud Noir từ năm 2013.Versace Dylan Blue là hương thơm của chàng trai hiện đại. Một mùi hương thể hiện đầy đủ những cá tính, sức mạnh và cả tài năng của họ. Truyền tải mùi hương truyền thống, nhưng theo cách vô cùng hiện đại và tươi mới cho hôm nay và ngày mai”. Là mùi hương mang dấu ấn đặc biệt của các loại gỗ thơm thiên nhiên quý hiếm. Bằng phương pháp tinh chế khéo léo, Versace Dylan Blue mở đầu bằng hương thơm mới mẻ của hỗn hợp cam, chanh và bưởi pha trộn cùng hương lá sung ẩn hiện tạo cảm giác thanh mát sắc sảo mang hương vị Địa Trung Hải. Hương biển quyến rũ, lá Violet và một chút hương tiêu đen ở tầng hương thứ hai góp thêm chút rắn rỏi cho người đàn ông. Nhưng mùi hương tinh tế của gỗ, long diên hương, giấy cói và hoắc hương mới chính là thành phần tạo nên sự quyền lực và mạnh mẽ của hương nước hoa này. Cuối cùng khép lại bằng sự quyến rũ ấm áp của xạ hương và khoáng chất. Chai nước hoa mang hình dáng thiết kế vượt thời gian với gam màu thu hút người đối diện ngay từ cái nhìn đầu tiên – xanh dương sáng và vàng gold. Các đường kẻ trên thân chai được điêu khắc tỉ mỉ cùng với biểu tượng quen thuộc của Versace – hình đầu rắn Medusa. Hương thơm phù hợp khi đi làm, những buổi tiệc sang trọng hay những cuộc hẹn hò lãng mạn.',
        price: 100,
        imagePath: './../images/Perfume/Versace Pour Homme Dylan.jpg'
    }
    ];
      Products.forEach((item, index) => {
          item.createdAt = Sequelize.literal('NOW()');
          item.updatedAt = Sequelize.literal('NOW()');
      });
      return queryInterface.bulkInsert('Products', Products, {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Products', null, {});
  }
};