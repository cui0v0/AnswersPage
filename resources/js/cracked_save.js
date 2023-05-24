function cracked_save(obj, status) {
			var pj06xhs = document.getElementsByName("pj06xh");
			//逻辑问题，选择一个时，就可以通过，jun.l modified by 2013-12-19
			/*
			var flag = false;
			for (i = 0; i < pj06xhs.length; i++) {
				var pj0601s = document.getElementsByName("pj0601id_"+ pj06xhs[i].value);
				for (j = 0; j < pj0601s.length; j++) {
					if (pj0601s[j].checked) {
						flag = true;
						break;
					}
				}
			}
			*/
			
			var flag = true;
			for (i = 0; i < pj06xhs.length; i++) {
				if(jQuery("input[name='pj0601id_"+ pj06xhs[i].value+"']:checked").length == 0) {
					flag = false;
					break;
				}
			}
			if (!flag) {
				alert("评价的每项指标都必须选择!");
				return false;
			}
			flag = false;
			var minZb = 0;//取到最小指标数
			for (i = 0; i < pj06xhs.length; i++) {
				var pj0601s = document.getElementsByName("pj0601id_"+ pj06xhs[i].value);
				minZb = pj0601s.length;
				break;
			}
			
			for(j = 0; j < minZb; j++) {
				var _ind = 0;
				for (i = 0; i < pj06xhs.length; i++) {
					var pj0601s = document.getElementsByName("pj0601id_"+ pj06xhs[i].value);
					if (j < pj0601s.length && pj0601s[j].checked) {
						_ind++;
					}
				}
			if (_ind == pj06xhs.length) {
				flag = true;
				break;
			}
		}
		
		if(flag){
			alert("请不要选相同一项！");
			return false;
		}

		if (status == "1") {
			document.getElementById("issubmit").value = "1";
		} else {
			document.getElementById("issubmit").value = "0";
		}
		
		if(status == "1" && !confirm("您是否确认提交当前评价,提交后不能修改！")) {

		} else {
			obj.disabled = true;
			document.getElementById("Form1").submit();
		}
	}
