# Contoh Rest API NodeJS Express dengan database MongooDb
Untuk menjalankan proses backend untuk menjalankan perintah **Create (Post), Read (Get), Update (Put) dan Delete (Delete)** 

## Gunakan Postman
   ###
      1.Create data
        Response Method: POST
        Request URL: http://localhost:3000/productss
        form data : name        shampo
                    quantity    5 
                    price       5000
                    image       https://www.istockphoto.com/id/foto/dua-botol-plastik-putih-untuk-shower-gel-dan-sabun-cair-mengambang-di-latar-belakang-gm1410086006-460412227
        
      2.cek data
        Response Method: GET
        Request URL: http://localhost:3000/products
        balikan : {"_id":"65780746da7c458ed002d70e",
                   "name":"shampo",
                   "quantity":5,
                   "price":5000,
                   "image":"https://www.istockphoto.com/id/foto/dua-botol-plastik-putih-untuk-shower-gel-dan-sabun-cair-mengambang-di-latar-belakang-gm1410086006-460412227","__v":0}
        Response Method: GET
        Request URL: http://localhost/ci4restapi/public/pegawai/1
        balikan : {
                  "id": "1",
                   "nama": "luthfi",
                   "email": "luthfi@hotmail.com"
                  }
      3.Update data
        Response Method: PUT
        Request URL: http://localhost/ci4restapi/public/pegawai
        pilih raw dan pilih json
        isi raw :
                  {
                  "id": "1",
                  "nama": "luthfi",
                  "email": "luthfifuadi@gmail.com"
                  }
        balikan : {
                   "status": true,
                   "message": "data berhasil di update !"
                  }              
        4.Hapus data
        Response Method: DELETE
        Request URL: http://localhost/ci4restapi/public/pegawai/1
        balikan  : {
                     "status": 200,
                     "error": null,
                     "message": {
                        "success": "data berhasil dihapus..!"
                                }
                    }
