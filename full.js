q=C.createImageData(64,32);n=[];for(a=8192;a--;)q.data[a]=a%4-3?0:255,80>a&&(n[a]=eval("0x"+"F999F26227F1F8FF1F1F99F11F8F1FF8F9FF1244F9F9FF9F1FF9F99E9E9EF888FE999EF8F8FF8F88"[a]+0));V=new Uint8Array(new ArrayBuffer(16));D=[];h=512;g=r=w=k=0;E=[96,103,104,105,100,101,102,97,98,99,81,87,69,82,84,89];s=[];(t=new XMLHttpRequest).open("GET",location.hash.slice(1));t.responseType="arraybuffer";t.send();t.onload=function(){for(a=(u=new Uint8Array(t.response)).length;a--;)n[a+512]=u[a];setInterval(function(){w&& w--;for(F=4;F--;){p=n[h]<<8|n[h+1];f=p>>12;x=p&4095;d=p&255;l=p&15;b=p>>8&15;m=V[p>>4&15];if(224==p)for(a=8192;a--;)q.data[a]=a%4-3?0:255;238==p&&(h=D.pop());1==f&&(h=x-2);2==f&&(D.push(h),h=x-2);if(3==f&&V[b]==d||4==f&&V[b]!=d||5==f&&V[b]==m||9==f&&V[b]!=m||14==f&&(158==d&&s[V[b]]||161==d&&!s[V[b]]))h+=2;6==f&&(V[b]=d);7==f&&(V[b]+=d);8==f&&(l||(V[b]=m),1==l&&(V[b]|=m),2==l&&(V[b]&=m),3==l&&(V[b]^=m),4==l&&(V[15]=+(255<(V[b]+=m))),5==l&&(V[15]=+(0<=(V[b]-=m))),6==l&&(V[15]=V[b]&1,V[b]/=2),7==l&& (V[15]=+(0<=(V[b]=m-V[b]))),14==l&&(V[15]=V[b]>>7,V[b]*=2));10==f&&(k=x);11==f&&(h=x+V[0]);12==f&&(V[b]=~~(Math.random()*d));if(13==f)for(V[15]=0,a=l;a--;)for(B=8;B--;)y=V[b]+B,A=m+a,n[k+a]>>7-B&1&&(63<y&&(y-=63),31<A&&(A-=31),u=4*(64*A+y)+3,q.data[u]?q.data[u]=0:(q.data[u]=255,V[15]=1));if(15==f){7==d&&(V[b]=w);10==d&&(~(V[b]=s.indexOf(!0))||(h-=2));21==d&&(w=V[b]);30==d&&(k+=V[b],V[15]=+(4095<k),k&=4095);41==d&&(k=5*V[b]);if(51==d)for(a=3;a--;)n[k+a]=(""+V[b])[a];if(85==d)for(a=b;a--;)n[k+a]=V[a]; if(101==d)for(a=b;a--;)V[a]=n[k+a]}h+=2}C.putImageData(q,0,0)},16)};onkeyup=function(e){s[E.indexOf(e.keyCode)]=!1};onkeydown=function(e){s[E.indexOf(e.keyCode)]=!0}