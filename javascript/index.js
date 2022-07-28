function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
document.write(Number(reverse_a_number(32243)));
