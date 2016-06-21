# finalproject
Computer Graphics Final Project
Shawn Gu
used various stackexchange threads and some three.js tutorials
mouse rotation adapted from
http://benchung.com/rotate-view-mouse-three-js/

RLFBUD for clockwise rotations of that face

y for cube rotation like U, p for ccw
note: using the mouse to move the cube does not change the orientation of the slice turns. IE if you want orange to be the front face you need to do a y rotation, not turn the mouse with orange to the front. This is because it is complicated to define faces based on partial rotations, and in a solve you would use a key rather than the mouse to rotate the cube for maximum speed. 

x and z cube rotations not implemented on purpose because they generally have little use

rotation animation not implemented on purpose because they add unnecessary time on potential speedsolves. Rotations at the speed where they don't take up time are essetially the same as instant rotations.



possible additions:
M slice rotations (and double slice): the current common method doesn't really make use of these rotations, so I left them out.  