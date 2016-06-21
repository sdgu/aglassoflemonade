[_tb_system_call storage=system/_scene2.ks]

*start

[bg  time="3000"  method="crossfade"  storage="room.jpg"  ]
[tb_show_message_window  ]
[chara_mod  name="Mario"  time="600"  storage="chara/1/peachy_transparent.png"  ]
[chara_show  name="Mario"  time="1000"  wait="true"  left="318"  top="102"  width="300"  height="433"  reflect="false"  ]
#Peachy
Hey![p]


[tb_hide_message_window  ]
*blush*[p]

[chara_mod  name="Mario"  time="600"  storage="chara/1/peachy_blushing.png"  ]
[glink  color="black"  storage="scene2.ks"  size="20"  text="Hey!"  target="*greeting"  x="600"  y="552"  width=""  height=""  _clickable_img=""  ]
[glink  color="black"  storage="scene2.ks"  size="20"  text="Hi"  x="614"  y="628"  width=""  height=""  _clickable_img=""  target="*greeting"  ]
[s  ]
*greeting

[tb_show_message_window  ]
#Peachy
Ugh English next. Totally not looking forward to it.[p]
#


[chara_mod  name="Hedgehog"  time="200"  storage="chara/2/hedgehog_transparent.png"  ]
[chara_show  name="Hedgehog"  time="1000"  wait="true"  left="885.8125"  top="232"  width="257"  height="324"  reflect="false"  ]
#Hedgehog
AAAAAAAAAOOOOOOOOOOOOHHHHHHHHHHHHHHHHH [p]
wats up Peachy!? Do u have any shweed?[p]
#


[chara_mod  name="Mario"  time="600"  storage="chara/1/peachy_sigh.png"  ]
#Peachy
Mr. Hedgehog, I told you, I don't do that kind of thing! Please I'm talking to Blario here![p]
#


[chara_mod  name="Hedgehog"  time="200"  storage="chara/2/hedgehog_sad.png"  ]
[chara_mod  name="Hedgehog"  time="200"  storage="chara/2/hedgehog_transparent.png"  ]
#Hedgehog
Aaoohh. Well I'll just talk to you later then. Stay chaotic.[p]
#


[tb_hide_message_window  ]
[chara_mod  name="Mario"  time="600"  storage="chara/1/peachy_transparent.png"  ]
[chara_hide  name="Hedgehog"  time="200"  wait="true"  ]
[glink  color="black"  storage="scene2.ks"  size="20"  text="Ugh.&nbsp;Ditch&nbsp;class"  x="552"  y="640"  width=""  height=""  _clickable_img=""  target="*Ditched_Class"  ]
[glink  color="black"  storage="scene2.ks"  size="20"  text="Keep&nbsp;Talking"  target="*Keep_Talking"  x="564"  y="584"  width=""  height=""  _clickable_img=""  ]
[s  ]
*Keep_Talking

[tb_show_message_window  ]
#Blario
Hedgehog sure is a character, isn't he?[p]
#Peachy
Yeah, but he's a great guy. Just a bit too obsessed with some OC called the Chaos Sapphires.[p]
Hey they opened a new crepe place downtown. Want to go after school?[p]
#


[tb_hide_message_window  ]
[glink  color="black"  storage="scene2.ks"  size="20"  text="Agree"  target="*Agree"  x="120"  y="444"  width=""  height=""  _clickable_img=""  ]
[glink  color="black"  storage="scene2.ks"  size="20"  text="Forever&nbsp;alone"  x="90"  y="510"  width=""  height=""  _clickable_img=""  target="*alone"  ]
[s  ]
*Agree

[tb_show_message_window  ]
#Blario
Yeah let's go! [p]
#Peachy
Cool! Let's meet in front of the gate after school. [p]
#


[tb_hide_message_window  ]
[chara_hide  name="Mario"  time="1000"  wait="true"  ]
[jump  storage="DateGate.ks"  target="*Start"  ]
[s  ]
*alone

[tb_show_message_window  ]
#Blario
No thanks.[p]
#Peachy
Oh. Well I'm always up to go if you ever want to.[p]
#Teacher
Alright everyone, let's begin class.[p]
#


[tb_hide_message_window  ]
[chara_hide  name="Mario"  time="1000"  wait="true"  ]
[jump  storage="NoDateGate.ks"  target="*start"  ]
[s  ]
*Ditched_Class

[chara_hide  name="Mario"  time="1000"  wait="true"  ]
[jump  storage="DitchClass.ks"  target="*Start"  ]
