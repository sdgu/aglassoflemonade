
;==============================
; タイトル画面
;==============================
[hidemenubutton]


	;標準のメッセージレイヤを非表示
	[tb_hide_message_window]

	;タイトル表示
	[bg storage ="title.jpg"]

	*title

	

	[glink text="New&nbsp;Game" x=75 y=370 target="*start"]
	[glink text="Load&nbsp;Game" x=75 y=470 target="*load"]


	

	[s]

	;-------ボタンが押されたときの処理

	*start

	
	[showmenubutton]
	

	[cm]
	@jump storage="scene1.ks"
	[s]

	;--------ロードが押された時の処理
	*load

	
	[showmenubutton]
	

	[cm]
	[showload]
	[jump target=*title]

	[s]


