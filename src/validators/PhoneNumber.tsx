export const validatePhoneNumber = (_:any, value: string) => {
	const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})\b/;
	if (value && !phoneRegex.test(value)) {
		return Promise.reject(new Error("Số điện thoại không hợp lệ!"));
	}
	return Promise.resolve();
};
