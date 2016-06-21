[_tb_system_call storage=system/_preview.ks ]

[bg  time="10"  method="crossfade"  storage="schoolgate.jpg"  ]
[tb_show_message_window] 
[chara_mod  name="Hedgehog"  time="10"  storage="chara/2/hedgehog_sapphire.png"  ]
[chara_mod  name="Handeggman"  time="10"  storage="chara/3/handeggman_transparent.png"  ]
[chara_show  name="Hedgehog"  time="10"  wait="true"  left="934"  top="-38"  width="264"  height="264"  reflect="false"  ]
[chara_show  name="Handeggman"  time="10"  wait="true"  left="490"  top="212"  width="435"  height="538"  reflect="false"  ]
[glink  color="black"  storage="NoDateGate.ks"  size="20"  text="Sure"  target="*sure"  x="570"  y="540"  width=""  height=""  _clickable_img=""  ]
[glink  color="black"  storage="NoDateGate.ks"  size="20"  text="No&nbsp;Thanks"  target="*no_thanks"  x="544"  y="600"  width=""  height=""  _clickable_img=""  ]
[s  ]
*sure

[tb_show_message_window  ]
#Blario
Sure. I don't have anything else to do.[p]
#Dr. Handeggman
Good. Follow us.[p]
#


[tb_hide_message_window  ]
[chara_hide  name="Hedgehog"  time="200"  wait="true"  ]
[chara_hide  name="Handeggman"  time="1000"  wait="true"  ]
[jump  storage="ChaosSapphireRouteStart.ks"  target="*start"  ]
[s  ]
*no_thanks

[tb_show_message_window  ]
#Blario
No thanks. Sounds like a drag.[p]
#Dr. Handeggman
Well that's unfortunate. See, now that Hedgehog has revealed the power of the Chaos Sapphires, we can't let you leave.[p]
You know, Blario, you're pretty cute. Only under these conditions can I unleash my ultimate attack.[p]
#


[chara_mod  name="Handeggman"  time="600"  storage="chara/3/eggman_test.gif"  ]
#Blario
AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH!!!!!!![p]
#


[quake  time="300"  count="3"  hmax="10"  wait="true"  vmax="10"  ]
[tb_image_show  time="1000"  storage="default/blackout.png"  width="1568"  height="882"  x=""  y=""  _clickable_img=""  ]
Shoulda hung out with Peachy.[p]
Fin.[p]


[chara_hide  name="Hedgehog"  time="200"  wait="true"  ]
[chara_hide  name="Handeggman"  time="1000"  wait="true"  ]
