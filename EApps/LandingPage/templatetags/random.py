import random
from django import template

register = template.Library()

classList = [
            'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning',
            'bg-info', 'bg-light', 'bg-dark'
]

@register.simple_tag
def random_css(a):
    return random.choice(classList)