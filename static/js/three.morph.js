/**
 * Created by Yuntian Chai on 15-3-30.
 */

THREE.morph = {};


var Exec = function(mesh,s)
{
    var i;
    var g = mesh.geometry;
    g.verticesNeedUpdate = true;
    for(i=0;i<g.vertices.length;i++)
    {
        var a = s* g.vertices[i].z;
        var x = g.vertices[i].x;
        var y = g.vertices[i].y;
        var x1 = x*Math.cos(a)-y*Math.sin(a);
        var y1 = x*Math.sin(a)+y*Math.cos(a);
        g.vertices[i].x = x1;
        g.vertices[i].y = y1;
    }

    g.computeFaceNormals();
    g.computeVertexNormals();

};

THREE.morph.exec = Exec;
