[_tb_system_call storage=system/_scene1.ks]

[cm  ]
[bg  storage="corridor-day.jpg"  time="1000"  ]
[tb_show_message_window  ]
[chara_mod  name="Mario"  time="600"  storage="chara/1/peachy_transparent.png"  ]
[chara_show  name="Mario"  time="1000"  wait="true"  left="203.015625"  top="322"  width="252"  height="361"  reflect="false"  ]
#???
Hey there.[p]
My name is first name Princess last name Peach. But you can call me Peachy![p]
#Peachy


[tb_hide_message_window  ]
[glink  color="black"  storage="scene1.ks"  size="20"  text="What&nbsp;about&nbsp;Cutey?"  x="506"  y="624"  width=""  height=""  _clickable_img=""  target="*talking"  ]
[glink  color="black"  storage="scene1.ks"  size="20"  text="Ignore&nbsp;Kawaii&nbsp;Grill"  x="508"  y="572"  width=""  height=""  _clickable_img=""  target="*rip"  ]
[s  ]
*talking

[tb_show_message_window  ]
#Blario
What about Cutey?[p]
#Peachy


*blush*[p]

[chara_mod  name="Mario"  time="600"  storage="chara/1/peachy_blushing.png"  ]
You're so sweet.[p]


[chara_mod  name="Mario"  time="600"  storage="chara/1/peachy_transparent.png"  ]
[jump  storage="scene1.ks"  target="*Common"  ]
*rip

[tb_show_message_window  ]
[chara_mod  name="Mario"  time="600"  storage="chara/1/peachy_crying.png"  ]
#Peachy
:([p]


[jump  storage="scene1.ks"  target="*Common"  ]
[s  ]
*Common

[chara_mod  name="Mario"  time="600"  storage="chara/1/peachy_transparent.png"  ]
#
RIIIIIINNNNNNNGGGGGGGGGG!!![p]
#Peachy
Well I'll see you after class![p]
#


[chara_hide  name="Mario"  time="1000"  wait="true"  ]
[jump  storage="scene2.ks"  target="*start"  ]
