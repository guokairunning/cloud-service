/**
 * Created by lenovo on 2015/12/7.
 */
window.onload=function()
{
    var oTriangle=document.getElementById('triangle');
    oTriangle.className="triangle";
    var oUser=document.getElementById('user');
    oTriangle.onclick=function()
    {
        if(this.className=="triangle")
        {
            this.className="active_triangle";
            oUser.style.display='block';
        }
        else
        {
            this.className="triangle";
            oUser.style.display='none';
        }

    }
    var olbtn=document.getElementById('lbtn');
    olbtn.onmouseover=function()
    {
        olbtn.style.backgroundColor="#404040";
    }
    olbtn.onmouseout=function()
    {
        olbtn.style.backgroundColor='black';
    }
    var orbtn=document.getElementById('rbtn');
    orbtn.onmouseover=function()
    {
        orbtn.style.backgroundColor="#404040";
    }
    orbtn.onmouseout=function()
    {
        orbtn.style.backgroundColor='black';
    }


}


