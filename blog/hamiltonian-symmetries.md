# Hamiltonian, Poisson and Approximating Symmetries
> This is a WIP post. It's crux is that one could use optimisation techniques (e.g. gradient descent) to find approximate symmetries in a physical system because of Noether's Theorem. Also, for correct latex rendering, see [Github](https://github.com/Jeadie/Jeadie.github.io/blob/master/blog/hamiltonian-symmetries.md).

## Lagrangians
A Lagrangian (a smooth function $L$) can describe the mechanics of an entire sytem by the [stationary-action](https://en.wikipedia.org/wiki/Stationary-action_principle) principle for a configuration space, $M$. Considering the Lagrangian as a function of positions $q_i$ and velocities $\dot{q_i}$. The action of the lagrangian is: 

$A = \int^{t0}_{t1} L(q_i, \dot{q_i}) dt$

The stationary-action principle can be explained as:

$\delta A = 0$ 

Euler-Lagrange equations describe the stationary points, i.e. $\delta A = 0$, of action functionals.

$\frac{\partial }{\partial t} \frac{\partial L}{\partial \dot{q_i}} - \frac{\partial L}{\partial q_i} = 0$

Equations of motions can be explicitly computed for a Lagrangian, $L$ by the above.

All of this to describe/define _"generalised momenta"_, $p_i$, as $\frac{\partial L}{\partial \dot{q_i}}$. Generalised momenta are apparant analogies to momentum from typical Lagrangians, $L = \frac{1}{2}m\dot{q_i}^2 + V(q)$, whereby: $\frac{\partial L}{\partial q_i} = m\dot{q_i} = p_i$


## Hamiltonians
The relation between the Lagrangian and it's Hamiltonian, $L - \sum_i p_i\dot{q_i}$ can be derived from the differential, $dL$:  
$dL= \frac{\partial L}{\partial t}dt + \sum_i \frac{\partial L}{\partial q_i}dq_i + \frac{\partial L}{\partial p_i}dp_i$ 

$\frac{dL}{dt}= \frac{\partial L}{\partial t} + \sum_i \frac{\partial L}{\partial q_i}q_i + \frac{\partial L}{\partial p_i}p_i$

$\frac{dL}{dt}= \frac{\partial L}{\partial t} + \frac{\partial}{\partial t}\sum_i p_i\dot{q_i}$

$\frac{dL}{dt} - \frac{\partial}{\partial t}\sum_i p_i\dot{q_i} = \frac{\partial L}{\partial t}-\frac{\partial}{\partial t}[ L - \sum_i p_i\dot{q_i}] = \frac{\partial L}{\partial t}$

$\frac{\partial H}{\partial t} = -\frac{\partial L}{\partial t}$

That is, either both $H$ and $L$ are time-dependent, or time-independent. From Euler-Lagrange, the following relations also follow: 

$\frac{\partial H}{\partial q_i} = -\dot{p_i} \quad \frac{\partial H}{\partial p_i} = \dot{q_i}$

## Poisson Brackets
Defined on two functions, $f, g$ both of which are functions of canonical coordinates, $p_i, q_i$ (and time):

$\{f, g \} = \sum_i \frac{\partial f}{\partial q_i}\frac{\partial g}{\partial p_i} - \frac{\partial f}{\partial p_i}\frac{\partial g}{\partial q_i}$

For our coordinates $\{ q_i, p_j \} = \delta_{i, j}$ and $0 = \{ p_i, p_j \} =\{ q_i, q_j \}$. Poisson brackets are anticommutative, bilinear, follow the product rule and satisfy the [Jacobi Identity](https://en.wikipedia.org/wiki/Jacobi_identity). 

The above Hamiltonian equations are greatly simplified:

$\dot{q_i} = \{q, H \} \quad  \dot{p_i} = \{p, H \}$

In fact any quantity, $F(q, p)$ evolves with respect to the Hamiltonian $\dot{F_i} = \{F, H \}$.

## Symmetries
### Noether's Theorem
Relates a physical symmetry (e.g. rotational invariance) with a conservation quantity (e.g. angular momentum). In Lagrangian dynamics: 

$\frac{\partial }{\partial t} \frac{\partial L}{\partial \dot{q_i}} - \frac{\partial L}{\partial q_i} = 0$

$\frac{\partial }{\partial t} p_i = \frac{\partial L}{\partial q_i}$
$\frac{\partial L}{\partial q_i}  = 0 \to \frac{\partial }{\partial t} p_i  = 0$

That is, if the lagrangian doesn't depend on a coordinate, it's momentum along that component is conserved. 




