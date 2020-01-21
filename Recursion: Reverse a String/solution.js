const reverse = s => (s.length > 1 ? s.slice(-1) + reverse(s.slice(0, -1)) : s);
