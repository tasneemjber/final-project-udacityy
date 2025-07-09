import gulp from 'gulp';
import { exec } from 'child_process';
import { promisify } from 'util';

const shell = promisify(exec);


gulp.task('parcel', async () => {
  const { stdout, stderr } = await shell('npx parcel build starter/index.html');
  console.log(stdout);
  console.error(stderr);
});


gulp.task('test', async () => {
  const { stdout, stderr } = await shell('npx mocha');
  console.log(stdout);
  console.error(stderr);
});


gulp.task('default', gulp.series('parcel', 'test'));
