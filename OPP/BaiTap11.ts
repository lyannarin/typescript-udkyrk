/**
 * Bài 1
 Một phần mềm âm nhạc bao cho phép người dùng thực hiện tạo, chỉnh sửa playlist, phát nhạc ...
 Người Dùng:
 với các thuộc tính như username, password, email, và các phương thức như register(), login(), updateProfile(), tạo playlist, xóa playlist
 
 Playlist gồm các Song với các thuộc tính như title, artist, duration, các phương thức như liệt kê danh sách bài hát, tìm kiếm bài hát, thêm bài hát, xóa bài hát
 
 MusicPlayer là đối tượng có thể chứa Playlist các phương thức như play(), pause(), next(), previous().

 Yêu cầu: phân tích bài toán trên, mối quan hệ giữa các class, vẽ trên drawio, và xây dựng các class bằng typescript
 */

class User {
  username: string;
  password: string;
  email: string;

  register(user: string, pass: string, email: string): void {
    console.log('Dang ky user');
  }

  login(user: string, pass: string): void {
    console.log('Dang nhap');
  }

  updateProfile(user: string, pass: string, email: string): void {
    console.log('Update profile');
  }

  createPlayist(playlist1: Playlist): void {
    console.log('Create playlist');
  }

  deletePlayist(playlist1: Playlist): void {
    console.log('Delete playlist');
  }
}

class Songs {
  title: string;
  artist: string;
  duration: string;
}

class Playlist {
  song: Songs;

  getlistSong(): void {
    console.log('Danh sach bai hat');
  }
  addSong(): void {
    console.log('Them bai hat');
  }
  deleteSong(): void {
    console.log('Xoa bai hat');
  }
  searchSong(): void {
    console.log('Search song');
  }
}

class MusicPlayer {
  playlist1: Playlist;

  play(): void {
    console.log('Play');
  }

  pause(): void {
    console.log('Pause');
  }

  next(): void {
    console.log('Next');
  }

  previous(): void {
    console.log('Previous');
  }
}

const linh: User = new User();
linh.username = 'linhlp';
linh.email = 'linhlp@fpt.com';
linh.password = 'linhlp123';
linh.register('linhlp', 'linhlp@fpt.com', 'linhlp123');

/**
 * Bài 2
 * 
 Một phần mềm nấu ăn được yêu cầu như sau:
 Quản lý công thức: Người dùng có thể thêm, chỉnh sửa, và xóa công thức nấu ăn. Mỗi công thức bao gồm tên, danh sách nguyên liệu, hướng dẫn, thời gian chuẩn bị và thời gian nấu.
+Tìm kiếm công thức: Người dùng có thể tìm kiếm công thức dựa trên tên hoặc nguyên liệu. 
+Quản lý danh sách mua sắm: Người dùng có thể tạo và quản lý danh sách nguyên liệu cần mua.
+Danh sách món ăn yêu thích: Người dùng có thể thêm công thức vào danh sách yêu thích và quản lý danh sách này.
+Gợi ý món ăn: Dựa trên nguyên liệu có sẵn, phần mềm có thể gợi ý các công thức mà người dùng có thể thực hiện.

Một develop đã phân tích bài toán trên như sau:
Recipe
  +Thuộc tính: name, ingredients (danh sách nguyên liệu), instructions, prepTime, cookingTime.
  +Phương thức: addIngredient(), removeIngredient(), updateInstructions(), displayRecipe().

Ingredient
  +Thuộc tính: name, quantity, unit.
  +Phương thức: Không cần phương thức đặc biệt ngoài getter và setter.

ShoppingList
  +Thuộc tính: ingredients (danh sách nguyên liệu cần mua).
  +Phương thức: addItem(), removeItem(), clearList(), displayList().

FavoriteRecipes
  +Thuộc tính: recipes (danh sách công thức yêu thích).
  +Phương thức: addRecipe(), removeRecipe(), displayFavorites().

RecipeFinder
  +Thuộc tính: Không cần.
  +Phương thức: findByIngredient(), findByName(), suggestRecipe() (gợi ý công thức dựa trên nguyên liệu có sẵn).

Yêu cầu: phân tích bài toán trên, mối quan hệ giữa các class, vẽ trên drawio, và xây dựng các class bằng typescript
 */

class CongThucNauAn {
  tenCongThuc: string;
  dsNguyenLieu: string;
  huongDan: string;
  thoigianChuanBi: string;
  thoigianNau: string;
}

class QuanLyCongThuc {
  monan1: CongThucNauAn;
  createCongThuc(): void;
  updateCongThuc(monan: CongThucNauAn): void;
  deleteCongThuc(monan: CongThucNauAn): void;
  searchCongThuc(ten: string, nguyenlieu: string): void;
}

class QuanLyMuaSam {
  monan: CongThucNauAn;
  soluong: number;
  dongia: number;
  createDSNguyenLieu(): void;
}

class MonAnYeuThich {
  congthuc1: CongThucNauAn;
  addRecipe(): void;
  removeRecipe(): void;
  displayFav(): void;
}

class GoiYMonAn {
  nguyenLieuCoSan: string;
  monan: CongThucNauAn;
  suggestRecipe(nguyenLieuCoSan: string): void;
  searchRecipe(nguyenLieuCoSan: string): void;
}
