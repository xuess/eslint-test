function findFrom(formKey){
	const { props, _form } = this;

	if (this[formKey]){
		return this[formKey];
	}
	if(props.form){
		return props.form;
	}

	if (_form){
		return _form;
	}
}

function aaa (b){
	this.a = b;
}

// 校验 form 表单提交
@aaa('123')
class MyTestableClass {}


new MyTestableClass();

function Validate(formKey, errorCbKey){
	return function (target, propertyKey, descriptor) {

		const originalMethod = descriptor.value;

		descriptor.value = function (e, ...args) {
			const from = findFrom.call(this, formKey);

			e.preventDefault();
            
			from.validateFields((err, values)=>{
				const cbParams = [e, err, values, ...args];

				if (err){
					const errorCb = this[errorCbKey];

					errorCb && errorCb.apply(this, cbParams);
                    
					return;
				}

				originalMethod && originalMethod.apply(this, cbParams);
			});
		};

		return descriptor;
	};
}

export {
	Validate
};
