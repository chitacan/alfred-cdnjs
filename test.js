import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
  const alfy = alfyTest();

  const [{title, subtitle, arg, mods: {alt}}] = await alfy('howler');

  t.regex(title, /howler*/);
  t.regex(subtitle, /Javascript audio library for the modern web./);
  t.regex(arg, /https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/howler\/*/);
  t.deepEqual(alt, {
    arg: 'https://api.cdnjs.com/libraries/howler',
    subtitle: 'Open cdnjs page'
  });
});
