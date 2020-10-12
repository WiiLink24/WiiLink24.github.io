# wiilink24.github.io<br>
This is **no longer** WiiLink24's official site!<br>
You can view our documentation on Google sites, where we keep API documentation.<br>
wiilink24.com (which isn't up yet) is where we shall route wiilink24.github.io!<br>
<br>
**These links are dead:**
The first version is [here](https://wiilink24-8ff305a4b1.drafts.github.io/)<br>
The last archive was [here](https://wiilink24-8ff305a4b1.drafts.github.io/)<br>
# Compiling a CNAME Record to route to wiilink24.com<br>
Step 1: Do CTRL+R on Windows.<br>
Step 2: Type in cmd.exe in the dialog box that appears.<br>
Step 3: Press OK on the dialog box. Command Prompt should appear.<br>
Step 4: Don't close it just yet.<br>
Step 5: Clone this repo and save it to a directory that you rerember. It must have no spaces or symbols in the directory name!<br>
Step 6: In the window that opened in step 3, CD to the directory you created in Step 5.<br>
Step 7: Run ``call goodies/win-bin/cname.bat``<br>
Step 8: Close the window you opened in Step 3.<br>
Step 8: Go to the directory you created in Step 5.<br>
Step 9: Upload the CNAME file it generated, which is inside the directory you went into in Step 8, and upload ``CNAME`` to the root of this repo.<br>
Step 10: Done!<br>
# Add a redirect.<br>
Step 1: Download Notepad++<br>
Step 2: Install Notepad++<br>
Step 3: Clone this repo and save it to a directory you rerember.<br>
Step 4: Go to the directory you created in Step 4, and go into the redirects folder inside the folder you created in Step 4.<br>
Step 5: Make a copy of the file with the highest increment. For instance, if only redirect-0000.html exists, create a file named redirect-0001.html. If redirect-0030.html exists and it has files that number all the way back to 0000, create a file named redirect-0031.html. It goes from 0000-9999. I will soon make a tool to make this easier.<br>
Step 6: Open the file you created in Step 5 with the program you installed in Step 2.<br>
Step 7: Edit the filename on the end of the link variable to the filename of the file you created in Step 5.<br>
Step 8: Use the number on the end of the filename mentioned in Step 7, to make a file inside the pages directory, which is in the directory you created in Step 3, and make a file named page-numr and replace numr with the number you obtained at the beginning of this step, replace numr with that number.<br>
Step 9: Save that file, and upload all new files to this repo.<br>
Step 10: Done!<br>
