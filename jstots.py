import os

dirs = ['./src/js']

def rename(file, ext):
  os.rename(file, file.rsplit('.', 1)[0] + ext)

while len(dirs):
  for DIR in dirs:
    print(DIR)
    for sth in os.listdir(DIR):
      sth = os.path.join(DIR, sth)
      if os.path.isfile(sth) and sth.split('.')[-1] == 'js':
        rename(sth, '.ts')

      elif os.path.isdir(sth):
        dirs.append(sth)

    i = dirs.index(DIR)
    del dirs[i]
