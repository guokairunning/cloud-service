/**
 * Created by lenovo on 2015/12/16.
 */




    var oTriangle = document.getElementById('triangle');
    oTriangle.className = "triangle";
    var oUser = document.getElementById('user');
    oTriangle.onclick = function () {
        if (this.className == "triangle") {
            this.className = "active_triangle";
            oUser.style.display = 'block';
        }
        else {
            this.className = "triangle";
            oUser.style.display = 'none';
        }

    }


