function add_matrix(num_row, num_column, arr, title) {
   let body = document.getElementsByClassName("body_t")[0];
   let td_in_main = document.createElement("td");
   td_in_main.className = "td_in_main";
   let table = document.createElement("table");
   table.className = "matrix";
   for (let nr = 0; nr < num_row; nr++) {
      let tr = document.createElement("tr");
      for (let nc = 0; nc < num_column; nc++) {
         let td = document.createElement("td");
         //text 
         td.textContent = arr[num_column * nr + nc];
         tr.appendChild(td);
      }
      table.appendChild(tr);
   }
   td_in_main.appendChild(table);
   td_in_main.appendChild(add_title(title));

   body.appendChild(td_in_main);
}

function add_title(title) {
   let div_title = document.createElement("div");
   div_title.className = "title";
   div_title.textContent = title;
   return div_title;
}

function more_details(d) {
   let body = document.getElementsByTagName("body")[0];
   let td_in_main = document.createElement("div");
   td_in_main.className = "more";
   td_in_main.textContent = d;
   body.appendChild(td_in_main);
}
function rename_h() {
   document.getElementsByClassName("head")[0].textContent = event.srcElement.textContent;
}
function cll() {
   document.getElementsByClassName("head")[0].style.display = "block";
   document.getElementsByClassName("gif")[0].style.display = "none";
   document.getElementsByClassName("create")[0].style.display = "none";
   document.getElementsByClassName("body_t")[0].remove();
   for (let i = 0; i < document.getElementsByClassName("more").length; i++) {
      document.getElementsByClassName("more")[i].remove();
   }
   for (let i = 0; i < document.getElementsByTagName("form").length; i++) {
      document.getElementsByTagName("form")[i].remove();
   }
   var body_t = document.createElement("table");
   body_t.className = "body_t";
   document.getElementsByTagName("body")[0].appendChild(body_t);
}


function i_m() {
   cll();
   rename_h();
   let arr3 = [1, 0, 0, 0, 1, 0, 0, 0, 1];
   let arr2 = [1, 0, 0, 1];
   add_matrix(3, 3, arr3, "Identity Matrix 3X3");
   add_matrix(2, 2, arr2, "Identity Matrix 2X2");
   var more = " Identity matrix of size n is the n*n square matrix with ones on the main diagonal and zeros elsewhere";
   more_details(more);
}
function z_m() {
   cll();
   rename_h();
   let arr3 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
   let arr2 = [0, 0, 0, 0];
   add_matrix(3, 3, arr3, "Zero Matrix 3X3");
   add_matrix(2, 2, arr2, "Zero Matrix 2X2");
   var more = "All items equal zero";
   more_details(more);
}
function s_m() {
   cll();
   rename_h();
   //Square Matrix
   let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   let arr2 = [1, 2, 3, 4];
   add_matrix(3, 3, arr3, "Square Matrix 3X3");
   add_matrix(2, 2, arr2, "Square Matrix 2X2");
   var more = "n=m , The number of rows equals the number of columns";
   more_details(more);
}
function t_m() {
   cll();
   rename_h();
   let arr31 = [1, 2, 1, 0, 6, 4, 0, 0, 1];
   let arr32 = [1, 0, 0, 2, 96, 0, 4, 9, 69];
   let arr2 = [1, 2, 0, 4];
   add_matrix(3, 3, arr31, "Upper triangular Matrix 3X3");
   add_matrix(3, 3, arr32, "Lower triangular Matrix 3X3");
   add_matrix(2, 2, arr2, "Triangular Matrix 2X2");
   var more = "Triangular matrix is a special kind of square matrix. A square matrix is called lower triangular if all the entries above the main diagonal are zero. Similarly, a square matrix is called upper triangular if all the entries below the main diagonal are zero.";
   more_details(more);
}
function sy_m() {
   cll();
   rename_h();
   let arr = [1, 7, 3, 7, 4, 5, 3, 5, 0];
   add_matrix(3, 3, arr, "Symmetric Matrix 3X3");
   var more = "Symmetric matrix is a square matrix that is equal to its transpose , A^T= A .";
   more_details(more);
}
function sk_m() {
   cll();
   rename_h();
   let arr1 = [0, 2, -45, -2, 0, -4, 45, 4, 0];
   let arr2 = [0, -2, 45, 2, 0, 4, -45, -4, 0];
   add_matrix(3, 3, arr1, "A");
   add_matrix(3, 3, arr2, "-A=A^T");
   var more = "Skew-symmetric matrix is a square matrix whose transpose equals its negative , A^T= -A .";
   more_details(more);

}
function d_m() {
   cll();
   rename_h();
   let arr1 = [1, 0, 0, 0, 4, 0, 0, 0, -3, 0, 0, 0];
   let arr2 = [1, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, -3, 0, 0];
   let arr3 = [1, 0, 0, 0, 4, 0, 0, 0, -2];

   add_matrix(4, 3, arr1, "Diagonal matrix 4X3");
   add_matrix(3, 5, arr2, "Diagonal matrix 3X5");
   add_matrix(3, 3, arr3, "Diagonal matrix 3X3");

   var more = "Diagonal matrix is a matrix in which the entries outside the main diagonal are all zero";
   more_details(more);
}
function c_m() {
   cll();
   rename_h();
   document.getElementsByClassName("create")[0].style.display = "flex";
   document.getElementsByClassName('create')[0].innerHTML = '<form/><label for="rows"># Rows:</label><br><input type="number" id="rows" name="rows"><br><label for="columns"># Columns:</label><br><input type="number" id="columns" name="columns"><br><label for="values">Values :</label><br><input type="text" id="values" name="values"><br><input onclick="cc_m()" type="button" value="Show"><input onclick="c_m()" type="button" value="Clear"></form>  <br></form> ';
}

function cc_m() {
   var rows = Number(document.getElementById("rows").value);
   var columns = Number(document.getElementById("columns").value);
   var values = String(document.getElementById("values").value);
   values += '.';
   add_matrix(rows, columns, sttoarr(values), "");
}
function sttoarr(a) {
   var arrr = [];
   var str = "";
   for (var i = 0; i < a.length; i++) {
      if (a[i] == " " || a[i] == '.') {
         arrr.push(Number(str));
         str = "";
      }
      else {
         str = str + a[i];
      }
   }
   return arrr;
}