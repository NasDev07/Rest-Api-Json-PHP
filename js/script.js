function tampilkanSemuaMenu() {
    $.getJSON('./data/pizza.json', function (data) {
        // console.log(data); // test data json dari file pizza.json
        let menu = data.menu;
        $.each(menu, function(i, data) {
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><img src="img/menu'+ data.gambar +'" class="card-img-top" alt="american-favourite"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">Rp. '+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
        });
    });
}

tampilkanSemuaMenu();

// untuk di klik di menu yang ada di navbar aktifkan class active
$('.nav-link').on('click', function() {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    // untuk mengambil nilai dari id yang ada di navbar
    let kategori = $(this).html();
    $('h1').html(kategori);
    
    // untuk menu all menu biyar di awal pas dikembalikan ada nampilin semua menu
    if(kategori == 'All Menu') {
        tampilkanSemuaMenu();
        return;
    }

    // untuk menu pizza supaya nampilin menu-menu kategori pizza
    $.getJSON('data/pizza.json', function(data) {
        let menu = data.menu;
        let content = '';

        $.each(menu, function(i, data) {
            if(data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3"><img src="img/menu'+ data.gambar +'" class="card-img-top" alt="american-favourite"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">Rp. '+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>'
            }
        });
        $('#daftar-menu').html(content);
    });
    
});
