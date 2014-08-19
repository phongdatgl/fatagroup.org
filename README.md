Fatagroup.org
=============

## Cài đặt

> Website xây dựng trên [jekyll](http://jekyllrb.com/), bạn cần cài đặt nó trước khi muốn chạy trên local.
> Nếu bạn chỉnh sửa js, css ở local, bạn cần cài đặt [bower](http://bower.io/) và [gulp](http://gulpjs.com/) để build less tự động.

Chạy lần luợt các lệnh sau (Clone repo về máy và chạy jekyll).

```
$ git clone https://github.com/fatagroup/fatagroup.org.git
$ cd fatagroup.org.git
$ jekyll serve -w
```

Truy cập website tại địa chỉ: http://0.0.0.0:4000

Deploy trên local, bận cần chạy những lệnh sau (Hãy chắc chắn đã cài node, bower và gulp).

```
$ npm install
$ bower install
gulp
```

## Đóng góp

- `Fork` repo này về github của bạn.
- Chỉnh sửa, thay đổi, thêm nếm...
- Tạo một pull-request tới repo này.
