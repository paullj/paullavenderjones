---
title: Placement at TTP.
published: 2020/10/30
author: Paul Lavender-Jones
description: Reflection on a project I worked on at my time at TTP
tags: university of bath, placement, ttp, python, data analysis, cambridge
---

During my year-long industrial placement at [The Technology Partnership (TTP)](https://www.ttp.com), I worked in the Sensors and Devices (SD) group alongside a ~multidisciplinary team~ of scientists and engineers.

> TTP is an engineering and ~technology consultancy~ working across a ~variety of industries~. In recent years TTP have become involved with a lot of work in the life sciences, especially diagnostic care but also have done and are continuing to work on anything from satellites to medical inhalers.

SD is a broad department with projects in many different fields as well as maturity of technology; some are early on in development, at the concept stage, others have been in production for many years. As well as client work, TTP also invest in technologies internally by running projects in house to build expertise and to license out or sell to clients in future.

My work in SD varied day to day but included software development, mechanical design and validation testing for multiple projects covering a ~wide spectrum of industries~ including [LiDAR](https://en.wikipedia.org/wiki/Lidar) for autonomous driving, low-cost [gas sensing](https://www.ttp.com/news/sonicsense) and rapid molecular [flu diagnostics](https://lexdiagnostics.com/about-lex/technology/) for primary care.

I was involved in a project testing LiDAR sensor range for a client. This was hands on and practical experience, measuring performance of a LiDAR in different lighting conditions. The findings from this work as well as the desire for SD to sell more work in the autonomous driving area lead to an ~internal student project~ in upsampling LiDAR data.

![graph showing LiDAR sparsity](assets/content/placement-1.png)
> Point clouds are sparse especially at the edge of a LiDAR’s range
![diagram of potential use of LiDAR upsampling](assets/content/placement-7.png)
> Having a good idea what’s between the points is valuable and can help with perception

A high level plan was drawn up so that I had a loose target to follow and organise my time accordingly, but it was by no means a strict development program. The actual project was fairly unbounded and ~driven by myself~. The plan included regular meetings where I would update my colleagues and to use their expertise to guide me on where to go next with the project.

Prior to my placement, I had ~little experience~ with Python or algorithm development. This student project was a great way for me to ~learn quickly~ in a real world context but without the added pressure of deliverables for external clients.

![pseudo-graph showing compressed sensing's benefit over other techniques](assets/content/placement-2.png)
> Why is compressed sensing of interest?

I started with a market analysis, academic research and a literature review where I compared the many ways of upsampling data. After reading relevant academic papers, I selected a few promising techniques to take further. I made simple 1D demos to test the edge cases of a handful of techniques and get a feel for their relative performance to each other. [Compressed sensing](https://en.wikipedia.org/wiki/Compressed_sensing) came out to be a perfect mix of good upsampling performance yet simple & cheap to compute.


![graph showing LiDAR sparsity](assets/content/placement-5.png)
> Reconstruction using only 5% of the original signal

I then took the concept further and developed a 3D demo from scratch for use with much larger point cloud data sets. I was a able to ~validate~ my work quantitatively against real-world LiDAR data to find ~vast improvement in performance~ compared to other ML techniques

![graph showing LiDAR sparsity](assets/content/placement-3.png)
> Close up comparison between original, compressed sensing and linear interpolation

The MATLAB, maths and modelling techniques knowledge from university and the other Python data processing projects I did on placement helped me put together a demo of the working algorithm. This project ran in a similar format to the design modules on my course at University, with lots of scope for research, validation testing and learning throughout the project.

![graph showing LiDAR sparsity](assets/content/placement-8.gif)
> **Left:** Data captured with LiDAR sensor. **Right:** After upsampling


