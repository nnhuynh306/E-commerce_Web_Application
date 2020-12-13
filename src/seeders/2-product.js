'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      var Products = [
      //Category1:Perfume
      {
        CategoryId:1,
        name: 'Versace Pour Homme Dylan',
        stock: 10,
        brand: 'Versace',
        description: 'Vào cuối tháng 7/2016, Versace ra mắt Dylan Blue, một hương thơm mới từ bộ sưu tập Versace Pour Homme theo giấy phép của Euroitalia, trong đó bao gồm bản gốc từ năm 2008 và các phiên bản Oud Noir từ năm 2013.Versace Dylan Blue là hương thơm của chàng trai hiện đại. Một mùi hương thể hiện đầy đủ những cá tính, sức mạnh và cả tài năng của họ. Truyền tải mùi hương truyền thống, nhưng theo cách vô cùng hiện đại và tươi mới cho hôm nay và ngày mai”. Là mùi hương mang dấu ấn đặc biệt của các loại gỗ thơm thiên nhiên quý hiếm. Bằng phương pháp tinh chế khéo léo, Versace Dylan Blue mở đầu bằng hương thơm mới mẻ của hỗn hợp cam, chanh và bưởi pha trộn cùng hương lá sung ẩn hiện tạo cảm giác thanh mát sắc sảo mang hương vị Địa Trung Hải. Hương biển quyến rũ, lá Violet và một chút hương tiêu đen ở tầng hương thứ hai góp thêm chút rắn rỏi cho người đàn ông. Nhưng mùi hương tinh tế của gỗ, long diên hương, giấy cói và hoắc hương mới chính là thành phần tạo nên sự quyền lực và mạnh mẽ của hương nước hoa này. Cuối cùng khép lại bằng sự quyến rũ ấm áp của xạ hương và khoáng chất. Chai nước hoa mang hình dáng thiết kế vượt thời gian với gam màu thu hút người đối diện ngay từ cái nhìn đầu tiên – xanh dương sáng và vàng gold. Các đường kẻ trên thân chai được điêu khắc tỉ mỉ cùng với biểu tượng quen thuộc của Versace – hình đầu rắn Medusa. Hương thơm phù hợp khi đi làm, những buổi tiệc sang trọng hay những cuộc hẹn hò lãng mạn.',
        price: 100,
        bigImagePath: './../public/assets/images/product/Perfume/Versace Pour Homme Dylan-2.jpg',
        smallImagePath: './../public/assets/images/Perfume/Versace Pour Homme Dylan-2-150x150.jpg'
      },{
        CategoryId:1,
        name: 'Lancome Tresor',
        stock: 10,
        brand: 'Lancôme',
        description: 'Lancome Tresor được mệnh danh là kho báu quý giá trong làng nước hoa biểu tượng cho phái đẹp (Tresor trong tiếng Pháp có nghĩa là kho báu). Lancome Tresor là một trong những nhãn hiệu nước hoa nữ bán chạy nhất và phổ biến nhất trên thế giới cho đến ngày nay. Sản phẩm mang cảm hứng hương vị hoa cỏ phương Đông ấm áp cuốn hút phái đẹp, được giới thiệu vào năm 1990. Tượng trưng cho mùi hương thanh lịch, khơi dậy màu xanh nền nã êm dịu của tử đinh hương ngay từ những hương vị đầu tiên rồi dẫn dắt ta vào khu vườn hồng trắng tỏa hương thơm ngát. Diên vĩ và vòi voi nhanh chóng hòa lẫn vào không gian của hương thơm gợi lên phong vị hoa cỏ lôi cuốn xinh đẹp mềm mại nhưng không quá sôi động. Vị đàn hương tươi đẹp càng tạo điểm nhấn cho lớp hương. Hương giữa lôi cuốn người sử dụng bằng tinh chất ấm áp ngọt ngào, thoang thoảng hương đào và bùng nổ một liều hoa mơ mạnh mẽ. Sự hòa quyện tuyệt vời của hương đào, lan chuông và tử đinh hương che giấu bớt vị ngọt mãnh liệt. Gỗ đàn hương như một bức tranh nền hài hòa níu giữ mọi hương thơm bất ngờ lan tỏa vị trầm lắng của vani và hổ phách. Tất cả tạo nên một chất vị thật êm dịu và mượt mà. Mẫu chai Tresor đã trở thành một huyền thoại gợi lên hình ảnh một chiếc kim tự tháp thủy tinh lật ngược tinh tế, hệt như một viên kim cương lộng lẫy tọa lạc trong chiếc hộp châu báu. Lancome Tresor không chỉ mang lại sự hài lòng mà còn gợi lên chiều sâu tâm hồn và cá tính tuyệt đối.',
        price: 90,
        bigImagePath: './../public/assets/images/Perfume/Lancome Tresor-1-550x550.jpg',
        smallImagePath:'./../public/assets/images/Perfume/Lancome Tresor-1-150x150.jpg'
      },{
        CategoryId:1,
        name: '212 Sexy Men',
        stock: 10,
        brand: 'Carolina Herrera',
        description: '212 Sexy Men được cho ra mắt vào năm 2006, sở hữu một hương thơm nồng ấm, gợi cảm và tinh tế được sáng chế tác hai nhà sáng chế nước hoa là Alberto Morillas và Rosendo Mateu. Hương thơm 212 Sexy Men thể hiện hình mẫu các chàng trai thành thị sành điệu và rất biết cách thể hiện mình, đặc biệt muốn tạo ấn tượng và thể hiện sức quyến rũ đối với nữ giới. Đây là một hương thơm gợi cảm, tươi mát theo xu hướng phương Đông. Carolina Herrera nói rằng bà đã lấy cảm hứng cho loại nước hoa này bằng cách pha trộn giữa phong cách hiện đại của thành phố New York và những đêm phương Đông huyền bí. Hương thơm từ bạch đậu khấu, hồ tiêu và hổ phách được kết hợp một cách tinh tế ở lớp hương đầu gợi ý lên cảnh tượng tuyệt đẹp trong một nhà hàng Ấn sang trọng, nơi hương cà ri phảng phất thơm nồng. Và rất nhanh chóng, Hương Va ni như một khu rừng huyền bí sẽ làm dịu đi lớp hương đầu tạo nên một 212 Sexy men đầy mạnh mẽ nhưng cũng rất ngọt ngào. Giờ đây khi lớp hương đầu đã lùi về phía sau để làm nên, sẽ chỉ còn lại mùi gỗ thơm ngát, hương hổ phách nồng ấm, mùi quýt tươi và phản phất đâu đó một chút hương hoa nhẹ nhàng quyến rũ. Mọi hương thơm được kết hợp một cách tinh tế hài hòa, đặc biệt nếu như so với các dòng nước hoa Va ni khác thì 212 Sexy Men thật sự đã làm tốt hơn rất nhiều để đem lại một mùi hương Va ni đầy quyến rũ và mạnh mẽ. Tương tự như hương thơm đặc trưng, thiết kế chai cũng mang lại sự tinh tế đầy nam tính. Đặc biệt sự kết hợp tinh tế trong thiết kế bằng kim loại với cách đóng và mở nắp chai cũng làm toát lên sự rắn chắc và mạnh mẽ.212 Sexy Men sẽ là dòng nước hoa lý tưởng mà bất kỳ người đàn ông hiện đại nào cũng ao ước bổ sung vào bộ sưu tập của mình. Với hương thơm từ quýt tươi, gỗ ấm hứa hẹn sẽ là sự lựa chọn hoàn hảo để sử dụng ở bất kỳ dịp nào',
        price: 110,
        bigImagePath: './../public/assets/images/Perfume/212 Sexy Man-600x600.jpg',
        smallImagePath:'./../public/assets/images/Perfume/212 Sexy Man-150x150.jpg'
      },{
        CategoryId:1,
        name: 'Viktor & Rolf Bon Bon',
        stock: 100,
        brand: 'Viktor & Rolf',
        description: 'Viktor Rolf đã cho ra đời một mùi hương mới dành riêng cho phái đẹp mang tên Bon Bon vào mùa xuân năm 2014. Hương thơm mới sở hữu tên gọi của kẹo ngọt với mục tiêu tôn vinh những người phụ nữ biết thưởng thức những khoái cảm cũng như những giây phút thư giãn, thăng hoa trong cuộc sống. Các thành phần hương liệu của mùi hương được sáng tạo bởi Cecile Matton và Serge Majoullier.BonBon toát lên sức sáng tạo tuyệt vời từ tinh chất cam, quýt lộng lẫy kết tinh thành những viên đường caramel gói gọn vị hoa quả căng mọng. Hương thơm ngọt ngào của đào ve vãn nhẹ nhàng với vị caramel dẻo dai như bám lấy bề mặt mượt mà của quả đào. Chiết xuất hoa cam ngọt ngào hòa quyện vào không gian đường caramel mềm mại và nâng niu những tia nắng rạng rỡ của hoa nhài. Khi bay hơi, hương gỗ tỏa hương với sự hòa quyện lãng mạn giữa tuyết tùng, gỗ Guaiac và đàn hương khơi gợi xúc cảm quyến rũ khó cưỡng chấm phá những điểm sáng hổ phách rạng ngời vẽ nên vầng hào quang tuyệt đẹp lan tỏa hương thơm đến tận hơi thở cuối cùng. BonBon gây ấn tượng từ cái nhìn đầu tiên bởi thiết kế chai màu hồng hệt như một viên kẹo được gói trong bọc. Theo một cách nhìn khác thì thân chai còn có hình dáng giống với một chiêc nơ. Từ thiết kế đến kiểu dáng đều diễn tả sự bay bổng và nữ tính, dành cho các bạn nữ trẻ tuổi thích phong cách ngây thơ, trong sáng.',
        price: 100,
        bigImagePath: './../public/assets/images/Perfume/Viktor & Rolf Bon Bon-600x341.jpg',
        smallImagePath:'./../public/assets/images/Perfume/Viktor & Rolf Bon Bon-150x150.jpg'
      },{
          CategoryId:1,
          name: 'Versace Pour Homme',
          stock: 1,
          brand: 'Versace',
          description: ' Versace Pour Homme là sự pha trộn các thành phần tinh chất có nguồn gốc Địa Trung Hải với hỗn hợp hương thơm hàng đầu rất phù hợp cho nam giới ngày nay: đó là những người đàn ông tri thức và tự tin, sống hài hòa với thế giới tự nhiên. Thông qua hương thơm đầy nam tính, dứt khoát, Versace Pour Homme liên kết sức mạnh và sự say mệ để tạo nên một người đàn ông năng động và thành đạt. Lớp hương đầu mở ra với mùi hương nhẹ nhàng và tươi mát của chi cam chanh vùng Diamante ở Calabria, phối hợp cùng lá và hoa của cây cam đắng tạo nên một hương thơm đặc trưng của vùng Địa Trung Hải. Hương giữa được pha trộn bởi những mùi hương hoa của lan dạ hương và phong lữ. Và lớp hương cuối nồng ấm là sự kết hợp của hổ phách, xạ hương và đậu tonka đem lại sự nam tính và gợi cảm. Được chiết xuất từ nguyên liệu thiên nhiên, nước hoa Versace Pour Homme Eau de Toilette có hương thơm nam tính, mạnh mẽ, quyến rũ. Versace Pour Homme Eau de Toilette sẽ giúp bạn trở nên tự tin, hấp dẫn hơn khi gặp gỡ bạn bè, hay tham gia vào những buổi tiệc quan trọng. Ngoài ra, với thiết kế vỏ ngoài đặc biệt, đơn giản nhưng không kém phần tinh tế và sang trọng với thiết kể cổ điển quen thuộc trong dung dịch màu xanh dịu nhẹ. Nổi bật nhất là chiếc nắp tròn mạ kim loại khắc tên thương hiệu xung quanh và biểu tượng nữ thần tóc rắn Medusa đặt phía trước thân chai sáng bóng.',
          price: 60,
          bigImagePath: './../public/assets/images/Perfume/Versace Pour Homme-2.png',
          smallImagePath:'./../public/assets/images/Perfume/Versace Pour Homme-2-150x150.png'
      },{ 
          CategoryId:1,
          name: 'Daisy Dream Marc Jacobs',
          stock: 1,
          brand: 'Marc Jacobs',
          description: 'Thương hiệu Marc Jacobs đã tung ra nước hoa Daisy Dream vào mùa hè năm 2014 với tư cách là một phiên bản mới kế nhiệm từ nguyên mẫu nước hoa Daisy (2007) truyền thống. Daisy Dream là một phiên bản mơ mộng và tinh tế hơn so với phiên bản gốc. Tổ hợp của Dream được cấu tạo từ các nốt hương hoa cỏ và trái cây để mang lại một hiệu ứng “xanh”. Cũng như phiên bản gốc, Alberto Morillas chính là người đã sáng tạo ra mùi hương này, với sự hợp tác của Ann Gottlieb và chính bản thân Marc Jacobs. Daisy Dream bắt đầu với hương quả mọng và lê ướt át và hương nước dừa xuất hiện cũng khá sớm, hương thơm không quá nồng, vì mùi nước dừa khá khác biệt so với cơm dừa. Khi nước hoa bắt đầu lắng đọng, hương thơm của hoa tử đằng cùng với hương hoa nhài thoang thoảng bắt đầu tỏa hương, ngoài ra còn có sự giúp sức của hương vải, khiến cho mùi hương không những mềm mại, nữ tính mà còn mang cảm giác nhiệt đới. Lớp hương cuối khá cân bằng nhờ vào các hương gỗ trắng khiến cho nước hoa không trở nên quá ngọt và một ít xạ hương âm ỉ ở phía nền làm cho nước hoa toát lên một sự gợi cảm. Ban đầu bạn có thể nghĩ đây là một chai nước hoa ngọt, nhưng lớp hương cuối nồng nàn khiến cho hương thơm cân bằng và thú vị hơn. Chai nước hoa mang một thiết kế cách tân so với phiên bản Daisy gốc, với thân hình đã được bo tròn và các bông hoa cúc trắng toát dùng để trang trí. Một mùi hương ngọt ngào nhẹ nhàng với các nốt hương hoa cỏ và trái cây. Mang lại một cảm giác nữ tính thanh tao cho các quý cô ở mọi độ tuổi.',
          price: 49,
          bigImagePath: './../public/assets/images/Perfume/Daisy Dream-2-768x507.png',
          smallImagePath:'./../public/assets/images/Perfume/Daisy Dream-2-150x150.png'
      },{
        CategoryId:1,
        name: 'Versace Pour Homme Dylan',
        stock: 1,
        brand: 'Versace',
        description: 'Vào cuối tháng 7/2016, Versace ra mắt Dylan Blue, một hương thơm mới từ bộ sưu tập Versace Pour Homme theo giấy phép của Euroitalia, trong đó bao gồm bản gốc từ năm 2008 và các phiên bản Oud Noir từ năm 2013.Versace Dylan Blue là hương thơm của chàng trai hiện đại. Một mùi hương thể hiện đầy đủ những cá tính, sức mạnh và cả tài năng của họ. Truyền tải mùi hương truyền thống, nhưng theo cách vô cùng hiện đại và tươi mới cho hôm nay và ngày mai”. Là mùi hương mang dấu ấn đặc biệt của các loại gỗ thơm thiên nhiên quý hiếm. Bằng phương pháp tinh chế khéo léo, Versace Dylan Blue mở đầu bằng hương thơm mới mẻ của hỗn hợp cam, chanh và bưởi pha trộn cùng hương lá sung ẩn hiện tạo cảm giác thanh mát sắc sảo mang hương vị Địa Trung Hải. Hương biển quyến rũ, lá Violet và một chút hương tiêu đen ở tầng hương thứ hai góp thêm chút rắn rỏi cho người đàn ông. Nhưng mùi hương tinh tế của gỗ, long diên hương, giấy cói và hoắc hương mới chính là thành phần tạo nên sự quyền lực và mạnh mẽ của hương nước hoa này. Cuối cùng khép lại bằng sự quyến rũ ấm áp của xạ hương và khoáng chất. Chai nước hoa mang hình dáng thiết kế vượt thời gian với gam màu thu hút người đối diện ngay từ cái nhìn đầu tiên – xanh dương sáng và vàng gold. Các đường kẻ trên thân chai được điêu khắc tỉ mỉ cùng với biểu tượng quen thuộc của Versace – hình đầu rắn Medusa. Hương thơm phù hợp khi đi làm, những buổi tiệc sang trọng hay những cuộc hẹn hò lãng mạn.',
        price: 100,
        bigImagePath: './../public/assets/images/Perfume/Versace Pour Homme Dylan.jpg'
      },
      //Category2:Cosmetic
      {
        CategoryId:2,
        name: 'Collagen Naara',
        stock: 1000,
        brand: 'Jeunesse Global',
        description: 'Thức uống làm đẹp bổ sung collagen Naara (Dạng bột hòa tan) cung cấp hàm lượng lớn TruMarine Collagen cho cơ thể, mang đến tất cả những gì làn da của bạn cần để có vẻ ngoài trẻ trung, săn chắc, rạng rỡ và khỏe mạnh hơn.TruMarine Collagen là loại Collagen có sinh khả dụng cao, bởi trọng lượng phân tử nhỏ, nên nó có thể thể dễ dàng hấp thu vào cơ thể, đồng hóa với tế bào và đem lại vẻ ngoài tươi tắn, trẻ trung hơn chỉ sau một khoảng thời gian ngắn sử dụng.Thức uống làm đẹp bổ sung collagen Naara trẻ hóa cơ thể bạn như thế nào? Collagen chiếm 1/15 trọng lượng cơ thể và là hoạt chất cấu thành 75% da của chúng ta. Tuy nhiên theo thời gian, khi tuổi tác lớn dần collagen sẽ bị hao hụt, mỗi 10 năm qua đi, da chúng ta sẽ mất đi 30% tổ chức collagen, đây chính là nguyên nhân làm da xỉn màu và chảy xệ, chính vì thế việc bổ sung cho cơ thể hoạt chất này sau độ tuổi 25 là hết sức cần thiết. Nhưng không phải Collagen nào cũng có cấu tạo giống nhau, TruMarine Collagen chiết xuất từ vây cá được biết đến là hoạt chất có tính sinh khả dụng cực cao, không chỉ bổ sung đủ lượng Collagen tinh khiết bị hao hụt mà còn kích thích quá trình sản xuất Collagen, Hydrat hóa da, tăng trưởng tóc và sức khỏe khớp.',
        price: 199,
        bigImagePath: './../public/assets/images/Cosmetic/Collagen Naara-1.png',
        smallImagePath:'./../public/assets/images/Cosmetic/Collagen Naara.png'
      },{
        CategoryId:2,
        name: 'Mac Tendertalk-Lip-Balm',
        stock: 1000,
        brand: 'Mac',
        description: 'Son dưỡng Mac Tendertalk-Lip-Balm tuyệt tác son dưỡng tựa pha lê sánh ngang Dior Lip Glow. Là một trong những dòng son hiếm hoi của MAC có tính năng lên màu tương ứng với độ pH của môi , siêu dưỡng chất giúp môi không khô tróc, khó chịu, sẽ rất được các bạn nữ ưa dùng trong các hoạt động thường ngày như đi học, đi làm,…',
        price: 19.99,
        bigImagePath: './../public/assets/images/Cosmetic/sonduong-Mac-768x453.png',
        smallImagePath:'./../public/assets/images/Cosmetic/sonduong-Mac-150x150.png'
      },{
        CategoryId:2,
        name: 'M.A.C Matte Lipstick Rouge À Lèvres',
        stock: 1000,
        brand: 'MAC',
        description: 'Về thiết kế theo xu hướng chung của MAC, sản phẩm được bao bọc cẩn thận bởi một lớp vỏ màu đen có ánh nhũ cực lôi cuốn, nhìn xa trông giống như một viên đạn.Texture (Chất son) là yếu tố khiến MAC được phái đẹp yêu thích nhất. Son lên đúng chuẩn màu lì đúng chất, lên môi lần đầu tiên đã đúng màu đến 85, 90%. Một số bạn cảm nhận rằng son MAC dường như ngắn hơn các thỏi son khác. Sự thật đúng là như vậy. Kích cỡ và chiều dài của thỏi son được rút bớt để đảm bảo cây son được sử dụng hết trong vòng 1 – 2 năm, khoảng thời gian an toàn để dùng mỹ phẩm. Nếu để quá lâu các chất trong son sẽ bị biến đổi và gây hại cho người sử dụng.',
        price: 19.99,
        bigImagePath: './../public/assets/images/Cosmetic/sonmac.png',
        smallImagePath:'./../public/assets/images/Cosmetic/sonmac-150x150.png'
      },
      //Category3:Fashion
      {
        CategoryId:3,
        name: 'Men Printed Lacoste Logo Cotton T-shirt',
        stock: 1000,
        brand: 'Lacoste',
        description: 'An iconic Lacoste crocodile adorns the front of this classic crewneck. This sporty, soft cotton jersey t-shirt also has a small green embroidered crocodile on the back of the neck. Wear it with a bomber jacket and raw denim jeans from the collection.',
        price: 99.99,
        bigImagePath: './../public/assets/images/Fashion/Men Printed Lacoste Logo Cotton T-shirt.jpg',
        smallImagePath:'./../public/assets/images/Fashion/Men Printed Lacoste Logo Cotton T-shirt-150x150.jpg'
      },{
        CategoryId:3,
        name: 'Men Regular Fit Premium Cotton Shirt',
        stock: 1000,
        brand: 'No Brand',
        description: 'Pure, clean lines define this shirt which is available in 7 modern colours. Made in a high-end honeycombed fabric, a casual wash is applied for Lacoste sportswear DNA. It is embellished with genuine mother-of-pearl buttons and an iconic small green embroidered crocodile on the chest. Designed in the spirit of the iconic Lacoste piqué, this new essential is the perfect addition to your seasonal wardrobe.',
        price: 99.99,
        bigImagePath: './../public/assets/images/Fashion/Men Regular Fit Premium Cotton Shirt-4.jpg',
        smallImagePath:'./../public/assets/images/Fashion/Men Regular Fit Premium Cotton Shirt-4-150x150.jpg'
      },{
        CategoryId:3,
        name: 'Maxi F21',
        stock: 1000,
        brand: 'No Brand',
        description: 'Chất liệu Thun cotton nhẹ mát. Kiểu dáng: Mulet cho đôi chân dài miên man, đắp chéo thời thượng, lại che bắp tay vừa đủ',
        price: 19.99,
        bigImagePath: './../public/assets/images/Fashion/Men Regular Fit Premium Cotton Shirt-4.jpg',
        smallImagePath:'./../public/assets/images/Fashion/Men Regular Fit Premium Cotton Shirt-4-150x150.jpg'
      },
      //Category4: Skincare
      {
        CategoryId:4,
        name: 'Set Sulwhasoo Timetreasure 6pcs',
        stock: 1000,
        brand: 'Sulwhasoo',
        description: 'Nước hoa hồng Sulwhasoo Timetreasure Invigorating Water (125ml + 25ml) : cung cấp sức mạnh đặc trị lão hoá, giúp bổ sung độ ẩm cho da, cải thiện quá trình tái tạo và phục hồi da, mang lại vẻ thanh xuân bất chấp thời gian. Sữa dưỡng Sulwhasoo Timetreasure Invigorating Emulsion (125ml + 25ml) : với sức mạnh đặc trị lão hoá từ chiết xuất thông đỏ, giúp cung cấp độ ẩm và nuôi dưỡng làn da tối ưu.Tinh chất Sulwhasoo Timetreasure Invigorating Serum 4ml: cung cấp độ ẩm tối ưu, làm sáng da và trả lại nét thanh xuân cho làn da. Ngoài ra, hương thơm từ chiết xuất thông đỏ mang đến cảm giác thư thái cho tinh thần. Mặt nạ ngủ Sulwhasoo Timetreasure Invigorating Sleeping Mask 15ml : Kết cấu dạng kem mịn màng, dễ dàng thẩm thấu, đem lại hiệu quả tối ưu nhất. Bổ sung thêm gấp đôi hàm lượng thông đỏ DAA đẩy mạnh khả năng chống lão hoá hơn nữa trên da.',
        price: 199,
        bigImagePath: './../public/assets/images/Skincare/Set Sulwhasoo Timetreasure-1.png',
        smallImagePath:'./../public/assets/images/Skincare/Set Sulwhasoo Timetreasure-1-150x150.png'
      },{
        CategoryId:4,
        name: 'Innisfree Aloe Revital Sleeping Pack',
        stock: 1000,
        brand: 'Innisfree',
        description: 'Mặt nạ ngủ Aloe Revital Sleeping Pack Innisfree có thành phần hoàn toàn từ thiên nhiên trong đó có 78% tinh chất thực sự từ lô hội, giúp xoa dịu mọi kích ứng từ ánh nắng mặt trời, dưỡng ẩm và cung cấp vitamin cho làn da.Mặt nạ ngủ Innisfree chuyên cấp nước dưỡng ẩm sâu cho làn da giúp tăng cường lớp bảo vệ của da, để lại làn da tươi và tràn đầy sinh lực.Giúp nuôi dưỡng làm da giúp da tươi sáng tự nhiên, mịn màng. Ngoài ra mặt nạ ngủ còn có tác dụng làm chậm quá trình lão hoá của da, chất nhầy của gel lô hội có khả năng thấm ướt, tạo ẩm độ trên da giúp da dễ đàn hồi, giảm bớt nếp nhăn.',
        price: 0.99,
        bigImagePath: './../public/assets/images/Skincare/Innisfree Aloe Revital Sleeping Pack-1-1200x1340.png',
        smallImagePath:'./../public/assets/images/Skincare/Innisfree Aloe Revital Sleeping Pack-1-150x167.png'
      },{
        CategoryId:4,
        name: '37 Losec Summa Elixir Special Set',
        stock: 1000,
        brand: 'Su:m',
        description: '37 Losec Summa là dòng sản phẩm nổi tiếng của Su:m. 37 mang tính chất đột phá cao trong công nghệ làm đẹp được coi là thần dược chữa trị nhiều vấn đề về da như lỗ chân lông to như da bị nhạy cảm,  ửng đỏ, da không đều màu và bị sạm, mụn đỏ sưng tấy, da bị suy giảm độ đàn hồi, giúp da săn chắc và chống lão hoá.',
        price: 99,
        bigImagePath: './../public/assets/images/Skincare/37 Losec Summa Elixir Special Set.png',
        smallImagePath:'./../public/assets/images/Skincare/37 Losec Summa Elixir Special Set-150x150.png'
      },{
        CategoryId:4,
        name: 'Eunyul Natural Moisture Mask Pack',
        stock: 1000,
        brand: 'Eunyul',
        description: 'Mặt nạ giấy Eunyul với thiết kế thông minh giúp độ ẩm không bị bay hơi trong quá trình đắp, có khả năng cấp nước tức thì và cung cấp độ ẩm sâu cho da, đánh bật vẻ xám xịt, mệt mỏi, mang lại làn da căng mịn, sáng khỏe.Quy cách đóng gói: Gói – 22ml, xuất xứ: Hàn Quốc. Mặt nạ dưỡng ẩm EUNYL Nha Đam dưỡng ẩm cho da với chiết xuất từ lá nha đam giúp làm dịu và cung cấp độ ẩm cho daDưỡng ẩm toàn diện từ sâu bên trong da. Giữ cho da mềm, cải thiện tình trạng da bị khô, cung cấp nước cho da,ngăn ngừa khuẩn mụn.',
        price: 0.49,
        bigImagePath: './../public/assets/images/Skincare/Eunyul Natural Moisture Mask Pack-1.jpg',
        smallImagePath:'./../public/assets/images/Skincare/Eunyul Natural Moisture Mask Pack-1-150x150.jpg'
      },{
        CategoryId:4,
        name: 'Whoo First Care Moisture 85ml',
        stock: 1000,
        brand: 'The History Of Whoo',
        description: 'Tinh chất Tuần Hoàn Whoo Bichup First Care Moisture Anti-Aging Essence chứa chiết xuất Siêu tử hà bí đơn, thành phần chủ chốt có khả năng giúp thúc đẩy sự tự hồi sinh của làn da (đây chính là công thức độc quyền của LG được bào chế hoàn toàn từ các nguyên liệu Đông y thực vật nhưng cho hiệu qua tái sinh tương đương với Tử hà xa (nhau thai)).Bằng kỹ thuật đặc biệt mà chỉ riêng Viện nghiên cứu Đông y của Whoo độc quyền sở hữu. Chiết xuất Siêu tử bí hà đơn với khả năng tái sinh ưu việt nay được tăng gấp đôi. Tuy vậy, sản phẩm không gây cảm giác bết dính, khó chịu nhờ vào kết cấu mềm ẩm, nhẹ nhàng. Hơn nữa, do có chứa thành phần Đông trùng hạ thảo chứa hợp chất Cordycepin, là một thảo dược vô cùng quý giá, từ xa xưa đã được mệnh danh là bí pháp trường sinh bất lão của Tần Thuỷ Hoàng và Dương Quý Phi. Có khả năng tìm lại vẻ tươi trẻ cho những làn da đã bị lão hoá. Đồng thời sản phẩm còn chứa thành phần hoa sen giúp làm sáng da ưu việt. Thêm vào đó, với sự kết hợp 3 thành phần độc quyền từ bí phương Hoàng cung là Cống thần đơn, Quỳnh ngọc đơn và Thanh tâm đơn, Whoo Bichup First Care Moisture Anti-Aging Essence mang lại hiệu quả kinh ngạc cho làn da: tăng cường khả năng đàn hồi da, giúp da trở nên tươi sáng rạng rỡ, cấp ẩm và làm dịu da, sản phẩm sẽ mang lại cho người sử dụng một làn da khỏe căng rạng ngời lộng lẫy như Vương hậu.',
        price: 99,
        bigImagePath: './../public/assets/images/Skincare/Whoo First Care Moisture 85ml-1.jpg',
        smallImagePath:'./../public/assets/images/Skincare/Whoo First Care Moisture 85ml-1-150x150.jpg'
      },{
        CategoryId:4,
        name: 'Mediheal Mogongtox Soda Bubble Sheet',
        stock: 1000,
        brand: 'Mediheal',
        description: 'Mặt Nạ Thải Độc Mediheal Mogongtox Soda Bubble Sheet là Sản phẩm từ hãng Dược mỹ phẩm Hàn Quốc Mediheal, nổi tiếng với công dụng “chạy chữa” cho làn da bị “ngộ độc” do khói bụi và các yêu tố gây hại từ môi trường.Sản phẩm có giá hơi cao hơn so với các loại mask thông thường, nhưng mặt nạ thải độc tố cho Da  thì lại là 1 sự đầu tư vô cùng xứng đáng. Mediheal Mogongtox Soda Bubble Sheet là loại mặt nạ tạo bọt bong bóng, “xả” độc cực hiệu quả, làm sạch sâu, đào thải độc tố của nước có gas, được chiết xuất từ than hoạt tính, bùn khoáng, trà xanh, lựu, đậu tương, quế, bạc hà, lô hội và nhiều loại thảo mộc khác.Sản phẩm sau khi đắp lên da sẽ có những bọt bong bóng phồng to lên như cơ chế của nước có ga, hút độc tố dưới da, những tế bào chết, mỹ phẩm hay chì gây độc hại cho da, mặt nạ hút lượng đầu dư dưới lỗ chân lôg, giúp da mịn màng, tươi sáng, rạng rỡ, chăm sóc và nuôi dưỡng làn da toàn diện. Lớp bọt này đồng thời đẩy những bụi bẩn và lớp dầu thừa tích tụ thành sừng ( mụn ) từ dưới da lên. Làm sạch sâu hoàn toàn lỗ chân lông. Mặt nạ sủi bọt thải độc bong bóng Mediheal có khả năng làm giảm sưng tấy những mụn đỏ, hạn chế sự hình thành mụn nhờ hút sạch những bụi bẩn, dầu dưới dưới lỗ chân lông, se khít lỗ chân lông hiệu quả, giúp da mịn màng căng sáng. Mặt nạ thích hợp cho mọi người sử dụng, phục hồi làn da tối ưu, loại bỏ những yếu tố gây hại cho da, chăm sóc và bảo vệ da khỏe và đẹp hơn.',
        price: 1.49,
        bigImagePath: './../public/assets/images/Skincare/Mediheal Mogongtox Soda Bubble Sheet-1.pngg',
        smallImagePath:'./../public/assets/images/Skincare/Mediheal Mogongtox Soda Bubble Sheet-1-150x150.png'
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